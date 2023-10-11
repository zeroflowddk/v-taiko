import { sepoliaClient, sepoliaWallet, taikoClient, taikoWallet } from "../viem/viemClient";
import { taiko_bridge } from "../setting";
import { bridgeAbi } from "../abi/abi_taiko";
import chalk from "chalk";
import { taikoContracts } from "../helper/contracts";
import { Hex } from "viem";

export class TaikoBridgeModule {
    privateKey:Hex
    contract_bridge: Hex = taikoContracts.router
    sepoliaClient: any
    sepoliaWallet:any
    taikoClient:any
    taikoWallet:any
    constructor(privateKey:Hex){
        this.privateKey = privateKey;
        this.sepoliaClient = sepoliaClient();
        this.taikoClient = taikoClient();
        this.sepoliaWallet = sepoliaWallet(privateKey);
        this.taikoWallet = taikoWallet(privateKey);
    };
    async bridgeDepositeL1L2():Promise<void>{
        try {
            const getBalance = await this.sepoliaClient.getBalance(this.sepoliaWallet.account);
            const [minPercentage, maxPercentage] = taiko_bridge.amountBridgeProcentIn;
            const randomPercentage = Math.ceil(Math.random() * (maxPercentage - minPercentage) + minPercentage);
            const amount = (getBalance / BigInt(100)) * BigInt(randomPercentage);
            const argsBridge = [1,this.sepoliaWallet.account.address, 11155111, 167007, this.sepoliaWallet.account.address, this.sepoliaWallet.account.address, this.sepoliaWallet.account.address, amount, 1350000000900000, 140000, "0x", ""];
            const txPayload = await this.sepoliaWallet.writeContract({
                address: this.contract_bridge,
                abi: bridgeAbi,
                args: [argsBridge],
                functionName: 'sendMessage',
                value: amount + BigInt(1350000000900000),
            });
            console.log(chalk.green("Send transaction on Bridge:", `https://sepolia.etherscan.io/tx/${txPayload}` ));
        } catch(error) {console.log(chalk.red("Произошла ошибка:", error))};
    };

    async bridgeDepositeL2L1():Promise<void>{
        try {
            const getBalance = await this.taikoClient.getBalance(this.taikoWallet.account);
            const [minPercentage, maxPercentage] = taiko_bridge.amountBridgeProcentIn;
            const randomPercentage = Math.ceil(Math.random() * (maxPercentage - minPercentage) + minPercentage);
            const amount = (getBalance / BigInt(100)) * BigInt(randomPercentage);
            const argsBridge = [0,this.taikoWallet.account.address, 167007, 11155111, this.taikoWallet.account.address, this.taikoWallet.account.address, this.taikoWallet.account.address, amount, 1350000000900000, 140000, "0x", ""];
            const txPayload = await this.taikoWallet.writeContract({
                address: this.contract_bridge,
                abi: bridgeAbi,
                args: [argsBridge],
                functionName: 'sendMessage',
                value: amount + BigInt(2000000000000000),
            });
            console.log(chalk.green("Send transaction on Bridge:", `https://explorer.jolnir.taiko.xyz/tx/${txPayload}` ));
        } catch(error) {console.log(chalk.red("Произошла ошибка:", error))};
    };
};
