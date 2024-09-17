import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    ton?: any;
  }
}

const TonWalletConnect: React.FC = () => {
  const [tonWallet, setTonWallet] = useState<string | null>(null);

  useEffect(() => {
    const checkTonWallet = async () => {
      if (typeof window.ton !== 'undefined') {
        try {
          const accounts = await window.ton.send('ton_requestAccounts');
          setTonWallet(accounts[0]);
        } catch (error) {
          console.error('Failed to connect TON wallet:', error);
        }
      }
    };

    checkTonWallet();
  }, []);

  const connectTonWallet = async () => {
    if (typeof window.ton !== 'undefined') {
      try {
        const accounts = await window.ton.send('ton_requestAccounts');
        setTonWallet(accounts[0]);
        console.log('Connected to TON wallet:', accounts[0]);
      } catch (error) {
        console.error('Failed to connect TON wallet:', error);
      }
    } else {
      console.log('Please install a TON wallet extension!');
    }
  };

  return (
    <div>
      {tonWallet ? (
        <p>Connected TON Wallet: {tonWallet}</p>
      ) : (
        <button onClick={connectTonWallet}>Connect TON Wallet</button>
      )}
    </div>
  );
};

export default TonWalletConnect;
