// components/ParticleConnectkit.tsx
'use client';

import React from 'react';
import { ConnectKitProvider, createConfig } from '@particle-network/connectkit';
import { wallet, type EntryPosition } from '@particle-network/connectkit/wallet';
import {
  solana
} from '@particle-network/connectkit/chains';
import { authWalletConnectors } from '@particle-network/connectkit/auth';
import { solanaWalletConnectors, injected as solaInjected } from '@particle-network/connectkit/solana';

const config = createConfig({
  projectId: import.meta.env.VITE_PARTICLE_PROJECT_ID,
  clientKey: import.meta.env.VITE_PARTICLE_CLIENT_KEY,
  appId: import.meta.env.VITE_PARTICLE_APP_ID,
  appearance: {
    mode: 'dark',
    theme: {
      '--pcm-body-background': '#1C1D22',
      '--pcm-body-color': '#ffffff',
      '--pcm-primary-button-bankground': '#FFFFFF',
      '--pcm-primary-button-color': '#000000',
      '--pcm-accent-color': '#A257FA',
    },
    connectorsOrder: ['email', 'social', 'wallet'],
    language: 'en-US',
  },
  walletConnectors: [
    authWalletConnectors({
      authTypes: ['google', 'apple', 'github', 'facebook', 'email'],
      fiatCoin: 'USD',
    }),
    solanaWalletConnectors({
      connectorFns: [
        solaInjected({ target: 'phantom' }),
        solaInjected({ target: 'coinbaseWallet' }),
        solaInjected({ target: 'okxWallet' }),
        solaInjected({ target: 'trustWallet' }),
        solaInjected({ target: 'bitKeep' }),
      ],
    }),
  ],
  plugins: [
    wallet({
      entryPosition: 'middle-center' as EntryPosition,
      visible: true,
    }),
  ],
  chains: [
    solana
  ],
});

export const ParticleConnectkit = ({ children }: { children: React.ReactNode }) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};