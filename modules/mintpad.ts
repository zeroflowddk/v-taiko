import { taikoClient, taikoWallet } from "../viem/viemClient";
import { Hex, parseEther } from "viem";
import { taikoContracts } from "../helper/contracts";
import chalk from "chalk";
import { minpadAbi } from "../abi/abi_taiko";

export class MinpadTaiko {
    privateKey: Hex
    _taikoClinet: any
    _taikoWallet: any
    constructor(privateKey:Hex){
        this.privateKey = privateKey;
        this._taikoClinet = taikoClient();
        this._taikoWallet = taikoWallet(privateKey);
    }; 

    async claimMinpad() {
        const args = ['0x0cD09E40476335f13b7Faf7171642c5C315f49c6', 0, 1, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', 0, [['0x0000000000000000000000000000000000000000000000000000000000000000'], 1, 0, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'],"0x"];
        try {
            const txMint = await this._taikoWallet.writeContract({
                address: taikoContracts.mintpad,
                abi: minpadAbi,
                functionName: 'claim',
                args: args,
                value: parseEther('0.001')
            });
            console.log(chalk.green("Claim NFT on Minpad >> :", `https://explorer.jolnir.taiko.xyz/tx/${txMint}` ));
        } catch(error) {console.log(chalk.red("Произошла ошибка:", error));}
    };
};