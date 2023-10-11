export const taiko_addons = {
    bridge: false,  // бридж
    swap: false, // свапы 
    nft: true, // нфт 
    smart_contracts: false // фабрика контрактов
};

export const taiko_bridge = {
    amountBridgeProcentIn: [10,40], // процент для бриджа
    amount_in_procent_dex: [30,50] // задержка 
};

export const taiko_swap = {
    tx_count: [2, 2], // указывайте кол-во свапов
    amount_in_procent_dex: [30, 40], //только при первой транзакции eth -> токен а дальше свап всего баланса
    sleep_to_from: [60,120] // задержка между транзакциями
};

export const smart_fabric = {
    number_contracts: 4, //кол-во контрактов для взаимодействия
    sleep_to_from: [20,10] // зарежка
};

