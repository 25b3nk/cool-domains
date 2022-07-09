# Create your own domain on Polygon

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.


## Setting up the project

Initial setup commands
```bash
$ npm init -y
$ npm install --save-dev hardhat
$ npx hardhat  # Then follow all the steps by saying yes (pressing enter)
$ npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
$ npm install @openzeppelin/contracts
$ npx hardhat accounts  # This prints out bunch of ethereum addresses for us to simulate real users on the blockchain
```

Compile
```bash
npx hardhat compile
```

Run test
```bash
npx hardhat test
```

Then we cleanup all the starter code
```bash
$ rm test/sample-test.js
$ rm scripts/sample-script.js
$ rm contracts/Greeter.sol
```

## Deploying and running locally

Then we write new smart contract into `contracts/` folder and a `run.js` script in `scripts/` folder. Then run the script.
```bash
$ npx hardhat run scripts/run.js
```

Hardhat basically runs a local ethereum blockchain and adds our contract into it, and then we interact with our contract.


## Deploying and running on testnet

Here we use [Alchemy](https://www.alchemy.com/) to help us broadcast the contract so that miners would mine the transaction to put contract on to the blockchain. Create an app in alchemy in polygon mumbai network and fetch the polygon url which is private.

Next configure the hardhat config file with the above url, and your account's private key. We write a different script for deploying which is similar to run.js. Then we deploy to the polygon mumbai network.

```bash
$ npm install dotenv 
$ npx hardhat run scripts/deploy.js --network mumbai
```

## Useful links

1. [Polygon faucet](https://faucet.polygon.technology/)
1. [Mumbai faucet](https://mumbaifaucet.com/)
1. [Polygonscan mumbai](https://mumbai.polygonscan.com/)
