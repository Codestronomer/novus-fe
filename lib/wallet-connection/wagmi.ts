"use client";
import { http } from "wagmi";
import { eduMainnet, eduTestnet} from "./chain";
import { createPublicClient } from "viem";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";

// export const config = createConfig({
//   chains: [eduMainnet, eduTestnet],
//   connectors: [injected()],
//   transports: {
//     [eduMainnet.id]: http(),
//     [eduTestnet.id]: http(),
//   },
// });

export const config = getDefaultConfig({
  appName: "Novus Academy",
  projectId: "b2f715b4a668031a1b752e82e5063115",
  chains: [eduMainnet, eduTestnet],
  ssr: true,
  wallets: [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet],
    },
  ],
});

// find a way to determine the chain id
export const publicClient = createPublicClient({
  chain: eduTestnet,
  transport: http(),
});

// let walletClient: any;

// if (typeof window !== "undefined") {
//   walletClient = createWalletClient({
//     chain: eduTestnet,
//     transport: custom(window.ethereum),
//   });
// }

// export { walletClient };