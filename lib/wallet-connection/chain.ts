// chains.ts
import { type Chain } from "wagmi/chains";

// Add these to your chains.ts file
export const eduMainnet = {
  id: 41923,
  name: "EDU Chain",
  nativeCurrency: {
    decimals: 18,
    name: "EDU",
    symbol: "EDU",
  },
  rpcUrls: {
    public: { http: ["https://rpc.edu-chain.raas.gelato.cloud"] },
    default: { http: ["https://rpc.edu-chain.raas.gelato.cloud"] },
  },
  blockExplorers: {
    default: {
      name: "EDU Scan",
      url: "https://explorer.edu.gelato.digital", // You may need to verify this URL
    },
  },
  contracts: {
    multicall3: {
      // You'll need to add the actual multicall contract address if available
      address: "0x0000000000000000000000000000000000000000",
      blockCreated: 0, // Replace with actual block number when contract was deployed
    },
  },
} as const satisfies Chain;

export const eduTestnet = {
  id: 656476,
  name: "EDU Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "EDU",
    symbol: "EDU",
  },
  rpcUrls: {
    public: {
      http: [
        "https://rpc.open-campus-codex.gelato.digital",
        "https://open-campus-codex-sepolia.drpc.org",
        "wss://open-campus-codex-sepolia.drpc.org",
      ],
    },
    default: { http: ["https://open-campus-codex-sepolia.drpc.org"] },
  },
  blockExplorers: {
    default: {
      name: "EDU Testnet Scan",
      url: "https://explorer.edu-testnet.gelato.digital", // You may need to verify this URL
    },
  },
  contracts: {
    multicall3: {
      // You'll need to add the actual multicall contract address if available
      address: "0x0000000000000000000000000000000000000000",
      blockCreated: 0, // Replace with actual block number when contract was deployed
    },
  },
} as const satisfies Chain;

// Update the getChainType function to include EDU chains
export const getChainType = (chainId: number): ChainType => {
  if (chainId === eduMainnet.id) return "mainnet";
  if (chainId === eduTestnet.id) return "testnet";
  return "mainnet";
};

// Update chains array to include EDU chains
export const chains = [eduMainnet, eduTestnet];

// Custom type to identify testnet/devnet chains
export type ChainType = "mainnet" | "testnet" | "devnet";