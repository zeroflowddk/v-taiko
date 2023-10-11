import { taikoSwap} from "../abi/abi_taiko";
import { Hex } from "viem";
import { taikoClient, taikoWallet } from "../viem/viemClient";
import { taiko_swap } from "../setting";
import { taikoContracts } from "../helper/contracts";
import { getTokenBalance, approve, random, sleep } from "../helper/helper";
import chalk from "chalk";

export class TaikoDexModule {
    privateKey:Hex
    contract_address_swap:Hex = taikoContracts.swap
    client:any
    wallet:any

    constructor(privateKey:Hex){
        this.privateKey = privateKey;
        this.client = taikoClient();
        this.wallet = taikoWallet(privateKey);
    };

    async getMinAmountOut(fromToken: Hex, toToken: Hex, amount: BigInt) {
        const minAmountOut = await this.client.readContract({
            address: this.contract_address_swap,
            abi: taikoSwap,
            functionName: 'getAmountsOut',
            args: [amount,  [fromToken, toToken]]
        });
        return BigInt((minAmountOut[1]));
    };

    async taikoSwapETHtoToken(tokenB:Hex):Promise<void>{
        try {
            const getBalance = await this.client.getBalance(this.wallet.account);
            const [minPercentage, maxPercentage] = taiko_swap.amount_in_procent_dex;
            const randomPercentage = Math.ceil(Math.random() * (maxPercentage - minPercentage) + minPercentage);
            const amount = (getBalance / BigInt(100)) * BigInt(randomPercentage);
            const swapPath = [taikoContracts.eth, tokenB];
            const deadline = Math.floor(Date.now() / 1000) + 60 * 10;
            const argsDex = [amount, swapPath, this.wallet.account.address, deadline];
        
            const txPayload = await this.wallet.writeContract({
                address: this.contract_address_swap,
                abi: taikoSwap,
                args: argsDex,
                functionName: 'swapExactETHForTokens',
                value: amount,
            });
            console.log(chalk.green(`Send transaction on Taiko Swap` , `https://explorer.jolnir.taiko.xyz/tx/${txPayload}` ));
        } catch(error){console.log(chalk.red("Произошла ошибка:", error));}
    };

    async taikoSwapTokentoETH(tokenA:Hex) {
        let amount = await getTokenBalance(this.client, tokenA, this.wallet.account.address);
        const deadline = Math.floor(Date.now() / 1000) + 60 * 10;
        
        try {
            const minAmountOut = await this.getMinAmountOut(tokenA, taikoContracts.eth, amount);
            await approve(this.wallet, this.client, tokenA, this.contract_address_swap, amount);
            const sleepT = random(taiko_swap.sleep_to_from[0], taiko_swap.sleep_to_from[1]);
            console.log(chalk.bgBlue(`Sleep ${sleepT} sec`));
            await sleep(sleepT*1000);


            const args = [amount, minAmountOut, [tokenA, taikoContracts.eth], this.wallet.account.address, deadline];
            const txPayload = await this.wallet.writeContract({
                address: this.contract_address_swap,
                abi: taikoSwap,
                functionName: 'swapExactTokensForETH',
                args: args
            }); 
            console.log(chalk.green(`Send transaction on Taiko Swap` , `https://explorer.jolnir.taiko.xyz/tx/${txPayload}` ));
        } catch(error){console.log(chalk.red("Произошла ошибка:", error))};
    };

    async taikoSwapTokentoToken(tokenA:Hex, tokenB:Hex) {
        let amount = await getTokenBalance(this.client, tokenA, this.wallet.account.address);
        const deadline = Math.floor(Date.now() / 1000) + 60 * 10;
        
        try {
            const minAmountOut = await this.getMinAmountOut(tokenA, tokenB, amount);
            await approve(this.wallet, this.client, tokenA, this.contract_address_swap, amount);
            const sleepT = random(taiko_swap.sleep_to_from[0], taiko_swap.sleep_to_from[1]);
            console.log(chalk.bgBlue(`Sleep ${sleepT} sec`));
            await sleep(sleepT*1000);


            const args = [amount, minAmountOut, [tokenA, tokenB], this.wallet.account.address, deadline];
            const txPayload = await this.wallet.writeContract({
                address: this.contract_address_swap,
                abi: taikoSwap,
                functionName: 'swapExactTokensForTokens',
                args: args
            }); 
            console.log(chalk.green(`Send transaction on Taiko Swap` , `https://explorer.jolnir.taiko.xyz/tx/${txPayload}` ));
        } catch(error){console.log(chalk.red("Произошла ошибка:", error))};
    };
};

