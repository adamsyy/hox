require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(
                    privateKeys.split(','),
                    `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
                )
            },
            gas: 5000000,
            gasPrice: 25000000000,
            network_id: 3
        }
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/abis/',
    compilers: {
        solc: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}