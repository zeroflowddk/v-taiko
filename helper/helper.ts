import fs from "fs"
import { Hex } from "viem"
import { erc20 } from "../abi/abi_taiko"
import chalk from "chalk";

async function checkAllowance(client: any, tokenAddress: Hex, contractAddress: Hex, walletAddress: Hex) {
    const allowance = await client.readContract({
        address: tokenAddress,
        abi: erc20,
        functionName: 'allowance',
        args: [ walletAddress, contractAddress]
    });
    return allowance
};

export async function approve(walletClient: any, client: any, tokenAddress: Hex, contractAddress: Hex, amount: bigint) {
    const allowance = await checkAllowance(client, tokenAddress, contractAddress, walletClient.account.address)
    if (allowance < amount) {
        const txHash = await walletClient.writeContract({
            address: tokenAddress,
            abi: erc20,
            functionName: 'approve',
            args: [ contractAddress, amount]
        });
        console.log(chalk.green(`${walletClient.account.address} | Success approve: https://explorer.jolnir.taiko.xyz/tx/${txHash}`));
    } else {
        console.log(chalk.red(`${walletClient.account.address} | Already approved`));
    }
};

export async function getTokenBalance(client: any, tokenAddress: Hex, address: Hex): Promise<bigint> {

    const balance = await client.readContract({
        address: tokenAddress,
        abi: erc20,
        functionName: 'balanceOf',
        args: [address]
    });
    return balance
};

export function random(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
};

export const sleep = async (millis: number) => new Promise(resolve => setTimeout(resolve, millis))

export function handlerPrivateKey(privateKey: string): Hex {
    if (privateKey.startsWith('0x')) {
        return privateKey as Hex
    } else {
        return `0x${privateKey}`
    }
}

export function readWallets(filePath: string) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n').map(line => line.trim()).filter(line => line !== '');
        return lines;
    } catch (error) {
        console.error('Error reading the file:', error);
        return [];
    }
}
