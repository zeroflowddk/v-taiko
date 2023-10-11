import { sepolia, jolnir } from './viemChain';
import { Chain, createPublicClient, createWalletClient, defineChain, Hex, http, HttpTransport, PrivateKeyAccount, PublicClient, WalletClient} from "viem";
import {privateKeyToAccount} from "viem/accounts"

export function sepoliaClient(): PublicClient {
    return createPublicClient({ chain: sepolia, transport: http() })
};

export function sepoliaWallet(privateKey: Hex): WalletClient<HttpTransport, Chain, PrivateKeyAccount> {
    return createWalletClient({ chain: sepolia, account: privateKeyToAccount(privateKey), transport: http() })
};

export function taikoClient(): PublicClient {
    return createPublicClient({ chain: jolnir, transport: http() })
};

export function taikoWallet(privateKey: Hex): WalletClient<HttpTransport, Chain, PrivateKeyAccount> {
    return createWalletClient({ chain: jolnir, account: privateKeyToAccount(privateKey), transport: http() })
};






