const CryptoBlockchain = require('./Blocks/blockchain.js')
const CryptoBlock = require('./Blocks/singleblock.js')

let hitCoin = new CryptoBlockchain();

console.log("hitCoin mining in progress....");
hitCoin.addNewBlock(
    new CryptoBlock(1, "01/06/2020", {
        sender: "Iris Ljesnjanin",
        recipient: "Cosima Mielke",
        quantity: 50
    })
);

hitCoin.addNewBlock(
    new CryptoBlock(2, "01/07/2020", {
        sender: "Vitaly Friedman",
        recipient: "Ricardo Gimenes",
        quantity: 100
    })
);

console.log(JSON.stringify(hitCoin, null, 4));
