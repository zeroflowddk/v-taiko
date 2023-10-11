import { bridgeHandler, swapHandler, nftTaiko, fabricContract } from "./helper/logic";
import { taiko_addons, smart_fabric } from "./setting";

if (taiko_addons.bridge) {
    bridgeHandler();
};
  
if (taiko_addons.swap) {
    swapHandler()
};
  
if (taiko_addons.nft) {
    nftTaiko()
};
  
if (taiko_addons.smart_contracts) {
    fabricContract(smart_fabric.number_contracts);
};
