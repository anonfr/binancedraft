'use client'

import React from 'react';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready(): void;
        sendData(data: string): void;
        openTonWallet(params: { url: string }): void;
      };
    };
  }
}

const TonWalletConnect: React.FC = () => {
  React.useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleConnect = () => {
    if (window.Telegram?.WebApp) {
      // This is a placeholder URL. You'll need to replace it with your actual TON transfer URL
      window.Telegram.WebApp.openTonWallet({ url: 'ton://transfer/...' });
    } else {
      console.log('Telegram WebApp is not available');
    }
  };

  return (
    <button onClick={handleConnect}>Connect TON Wallet</button>
  );
};

export default TonWalletConnect;
