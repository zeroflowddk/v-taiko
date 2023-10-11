import { taikoClient, taikoWallet } from "../viem/viemClient";
import { Hex, parseEther } from "viem";
import chalk from "chalk";
import { mint } from "../abi/abi_taiko";
import { taikoContracts } from "../helper/contracts";

export class mintNftTaiko {
    private_key: Hex
    nft_mint: Hex = taikoContracts.mint
    wallet: any
    constructor(private_key:Hex){
        this.private_key = private_key;
        this.wallet = taikoWallet(private_key);
    };  

    async mintNftHelloTaiko():Promise<void>{
        const args = ['0xA0134C3431168D8fC611A8bb40364dd1F6A7ba1c', 1, [], 1]
        try {
            const mintPayload = await this.wallet.writeContract({
                address: taikoContracts.mint, 
                abi: mint,
                functionName: 'mint',
                args:[args],
                value: parseEther('0.00025')
            });
            console.log(chalk.green("Send transaction with mint NFT:", `https://explorer.jolnir.taiko.xyz/tx/${mintPayload}` ));
        } catch(error) {console.log(chalk.red("Произошла ошибка:", error))};

    };  
};