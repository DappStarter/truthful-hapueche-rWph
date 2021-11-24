require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember around idea private flee speed'; 
let testAccounts = [
"0x6e6024131946ca31c6c90ffc0e4408765aca706c93cef8697f3d6102a41879ec",
"0x50e6a516d9fbc8799c910c6eb36cec5c491b07631e7b462a4f22141f0d55413a",
"0x56c36bf65ef5cd7c8fada0af150b7b0b4c77326e34cb05ad201af61f50861e3a",
"0x53b5eca33124e7b9a9897a9e2acad553f5e8ca4cc42164f2413daf327fe3af85",
"0x6fe4fcba435db9c42ee69dd4745531514ea7980e249907c3ed1ed19fddec7c71",
"0x9ea9b5d57d71734703361bf18c94607f35c2d3beead8490957eca6bc845f68d7",
"0x97bd692f64667dac6ac7f256f58285678ac7ba315c103c2a9f1b971395cf65ac",
"0x502322578fae097767aa4291fc08d1b6cd16ef8a8f1ebda932f609c0db3447f3",
"0xd4ba94c1475016229c3861b01d1bdd1b6705c8138ab90f67ceac4a799266097c",
"0xc872de29c8a6a770a507958ee68411b5b6bbdc2988487e5b2d5ca23cc2a65eee"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

