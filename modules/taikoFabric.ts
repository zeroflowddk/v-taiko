import { fabric, taikoSwap  } from "../abi/abi_taiko";
import { Hex, parseEther } from "viem";
import { taikoWallet } from "../viem/viemClient";
import { taikoContracts } from "../helper/contracts";
import chalk from "chalk";

export class TaikoFabric {
    private_key:Hex
    contract_address_fabric:Hex = taikoContracts.fabric
    wallet:any
    constructor(private_key:Hex){
        this.private_key = private_key;
        this.wallet = taikoWallet(private_key);
    };

    async taikoFabric(numberOfContracts:number):Promise<void>{
        try {
            const argsDex = [numberOfContracts];
            const txPayload = await this.wallet.writeContract({
                address: this.contract_address_fabric,
                abi: fabric,
                args: argsDex,
                functionName: 'createContracts',
                value: BigInt(numberOfContracts) * parseEther('0.001'),
            });
            console.log(chalk.green("Send transaction on fabric:", `https://explorer.jolnir.taiko.xyz/tx/${txPayload}` ));
        } catch(error) {console.log(chalk.red("Произошла ошибка:", error));}
    };
};

