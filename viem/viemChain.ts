import { defineChain } from "viem";

export const sepolia = defineChain({
    id:11155111,
    name:'Sepolia',
    network: 'sepolia',
    nativeCurrency:{
        decimals: 18, 
        name: 'Ether',
        symbol: 'ETH'
    }, 
    rpcUrls: {
        default: {
            http: ['https://endpoints.omniatech.io/v1/eth/sepolia/public'],
        },
        public: {
            http : ['https://endpoints.omniatech.io/v1/eth/sepolia/public']
        }
    },
    blockExplorers: {
        default: {name:'Explorer', url:'https://sepolia.etherscan.io'},
    }
});

export const jolnir = defineChain({
    id:167007,
    name:'Taiko',
    network: 'Taiko',
    nativeCurrency:{
        decimals: 18, 
        name: 'Ether',
        symbol: 'ETH'
    }, 
    rpcUrls: {
        default: {
            http: ['https://rpc.jolnir.taiko.xyz'],
        },
        public: {
            http : ['https://rpc.jolnir.taiko.xyz']
        }
    },
    blockExplorers: {
        default: {name:'Explorer', url:'https://explorer.jolnir.taiko.xyz'},
    }
});