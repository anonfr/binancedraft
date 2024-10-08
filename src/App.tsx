'use client'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import TonWalletConnect from './components/TonWalletConnect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TonConnectUIProvider manifestUrl="https://violet-binding-sloth-805.mypinata.cloud/ipfs/QmayBCjVRUtGPE1yd7Y9f5VoXBrBLULahrYKMkAJTXX3k9">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Check</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          AnonfrXBT was here...
        </p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TonWalletConnect />
      </div>
      <p className="read-the-docs">
        developing...
      </p>
    </TonConnectUIProvider>
  )
}

export default App
