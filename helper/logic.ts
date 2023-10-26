import { TaikoDexModule } from "./../modules/taikoSwap";
import { TaikoBridgeModule } from "../modules/mainBridge";
import { TaikoFabric } from "../modules/taikoFabric";
import { mintNftTaiko } from "../modules/taikoNFT";

import { random, sleep, readWallets, handlerPrivateKey } from "./helper";
import { taikoContracts } from "./contracts";
import { Hex } from "viem";
import { taiko_swap, taiko_bridge, taiko_addons, smart_fabric } from "../setting";
import { MinpadTaiko } from "../modules/mintpad";
import chalk from "chalk";

let privateKeys = readWallets('./private_key.txt')

export async function bridgeHandler(){
    console.log(chalk.bgCyan('Bridge Module'))
    for (let privateKey of privateKeys){
        const bridge = new TaikoBridgeModule(handlerPrivateKey(privateKey));
        const delay = random(taiko_swap.amount_in_procent_dex[0], taiko_swap.amount_in_procent_dex[1]);
        bridge.bridgeDepositeL1L2();
        await sleep(delay * 1000);
    };
};

async function getRandomToken(tokens:any) {
    const randomIndex = Math.floor(Math.random() * tokens.length);
   return tokens[randomIndex];
}


export async function swapHandler() {
    console.log(chalk.bgCyan('Swap Module'))
    for (let privateKey of privateKeys) {
        const tokens = [taikoContracts.ttkjo, taikoContracts.horse];
        let token1 = await getRandomToken(tokens);
        let token2 = tokens.filter(token => token !== token1)[0];
        const txAmount = Math.floor(Math.random() * (taiko_swap.tx_count[1] - taiko_swap.tx_count[0] + 1)) + taiko_swap.tx_count[0];
        const delay = random(taiko_swap.amount_in_procent_dex[0], taiko_swap.amount_in_procent_dex[1]);
        const swap = new TaikoDexModule(handlerPrivateKey(privateKey));
        await swap.taikoSwapETHtoToken(token1)
        await sleep(delay * 1000);

        for (let i = 0; i < txAmount; i++) {
            await swap.taikoSwapTokentoToken(token1, token2);
            console.log(chalk.bgBlue(`Sleep to next transaction/module >> ${delay}`));
            await sleep(delay * 1000);
            [token2, token1] = [token1, token2];  
        };
        await swap.taikoSwapTokentoETH(token1);
    };
};

export async function nftTaiko(){
    console.log(chalk.bgCyan('Mint NFT Module'));
    for (let privateKey of privateKeys){
        const nft = new mintNftTaiko(handlerPrivateKey(privateKey));
        const delay = random(taiko_swap.amount_in_procent_dex[0], taiko_swap.amount_in_procent_dex[1]);
        nft.mintNftHelloTaiko();
        await sleep(delay * 1000);
    };
};

export async function fabricContract(number:number){
    console.log(chalk.bgCyan('Create Contract Module'));
    for (let privateKey of privateKeys){
        const contract = new TaikoFabric(handlerPrivateKey(privateKey));
        const delay = random(taiko_swap.amount_in_procent_dex[0], taiko_swap.amount_in_procent_dex[1]);
        contract.taikoFabric(number);
        await sleep(delay * 1000);
    };
}

export async function minPad(){
    console.log(chalk.bgCyan('Try mint Mintpad NFT Taiko'));
    for (let privateKey of privateKeys){
        const claim = new MinpadTaiko(handlerPrivateKey(privateKey));
        const delay = random(taiko_swap.amount_in_procent_dex[0], taiko_swap.amount_in_procent_dex[1]);
        claim.claimMinpad();
        await sleep(delay * 1000);
    };
}
