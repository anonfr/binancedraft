import React from 'react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';

const TonWalletConnect: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();

  const handleSendTransaction = async () => {
    if (!tonConnectUI.connected) {
      console.log('Please connect your wallet first');
      return;
    }

    const transaction = {
      validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes from now
      messages: [
        {
          address: "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F",
          amount: "20000000"
        }
      ]
    };

    try {
      await tonConnectUI.sendTransaction(transaction);
      console.log('Transaction sent successfully');
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div>
      <TonConnectButton />
      {tonConnectUI.connected && (
        <button onClick={handleSendTransaction} style={{ marginTop: '10px' }}>
          Send Test Transaction
        </button>
      )}
    </div>
  );
};

export default TonWalletConnect;
