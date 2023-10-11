import { erc20Abi } from "../modules/abi.sub.mod/erc20"
import { Hex, toHex } from "viem"
import chalk from "chalk"
import fs from "fs"

async function checkAllowance(client: any, tokenAddress: Hex, contractAddress: Hex, walletAddress: Hex) {
    const allowance = await client.readContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [
            walletAddress,
            contractAddress
        ]
    })
    return allowance
};

export async function approve(walletClient: any, client: any, tokenAddress: Hex, contractAddress: Hex, amount: bigint) {
    const allowance = await checkAllowance(client, tokenAddress, contractAddress, walletClient.account.address)
    
    if (allowance < amount) {
        const txHash = await walletClient.writeContract({
            address: tokenAddress,
            abi: erc20Abi,
            functionName: 'approve',
            args: [ contractAddress, amount]
        });
        console.log(chalk.bgGreen((`${walletClient.account.address} | Success approve: https://basescan.org/tx/${txHash}`)));
    } else {
        console.log(chalk.bgGreen((`${walletClient.account.address} | Already approved`)));
    };
};

export function privateKeyConvert(privateKey: string): Hex {
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