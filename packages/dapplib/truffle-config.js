require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind concert harvest credit foster sell'; 
let testAccounts = [
"0xf7172f552a19b2b223ccaa458ca371a53d5eab0adfd6ab05b377d70a66630316",
"0x94e98b05df71b49a7493fd2b191337b037f87ac88639a0be0d8936d83997ab4b",
"0x5efbdd533216b25b2a95f1823504df14d7817b9fe79a5dc5d9f1006e136fa89b",
"0xbab1d7837d9f5a5b9222632451ee530144eb006ec7f542e8617189fe3c4eb83e",
"0xfd25139733b76d16a29a62c300dbc3d05f999f31f62daada445ded3323eec020",
"0xca718f0330edddc62addeff33b05bfa09a71c806a51cb9a4842b11dbd88f7a69",
"0x7026a28c478af261f8d0b963c8c6c620a05b875b26ad7f3a67cd93f2640349ce",
"0xedf4a204c406390f8a937a9a4b9642a0d8416828616082e7c960ae4d425afb1c",
"0xb2ded50ea13aa599204d9645c8b2a5e887fb4278200781aeedc2babea4747c9a",
"0x1c39bbc64a4d9556918cb9fcaec5fe50a652ca2d279151cce1b16a823419fbd1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

