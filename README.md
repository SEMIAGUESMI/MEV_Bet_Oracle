### Project description 
This project demonstrates a Betting contract that interacts with an Automated Market Maker (AMM) to get real-time token prices and uses [Chainlink](https://chain.link) oracles to fetch off-chain data in order to restrict MEV opportunities (front-running , back-running).

### Project structure

```
├── README.md
├── contracts                   # Contains Solidity smart contracts
├── hardhat.config.js       # Harthat configuration
├── ignition
│   └── modules             # JavaScript scripts for deploying smart contracts
├── package-lock.json
├── package.json
└── tests                           # JavaScript files for testing deployed smart contracts.
```

### Prerequisites

* WALLET_KEY: ensure that you have a wallet (e.g [Metamask](https://metamask.io/it/),  private key, used for deploying the smart contract and signing transac
* PROVIDER_API_KEY: The API key of blockchain infrastructure provider.

### Installation and Setup
1. Install Project Dependencies: Install all dependencies listed in package.json:
    ```
    npm install
    ```
2. Compile Smart Contracts
    ```
    npx hardhat compile
    ```
3. Configure the network (e.g., Sepolia testnet), signer accounts (private keys), and provider API key (e.g., Alchemy) in the `hardhat.config.js` file to enable successful deployment.
4. Use Hardhat Ignition to deploy the contracts Tcoin, AMM, and Bet to a specified network:
    ```
    for name in Tcoin AMM Bet; do 
        npx hardhat ignition deploy ./ignition/modules/deploy${name}.js --network <network-name>;
    done
    ```
5. (_Optional_) For post-deployment testing, ensure that the network, signer accounts, and provider API keys are also set up in the `scripts/.env` file for easy access.

### Testing the Function `win()`

1. [Acquire](https://docs.chain.link/resources/acquire-link) [Link](https://docs.chain.link/resources/link-token-contracts) tokens in your wallet (e.g., MetaMask).
2. [Fund the bet contract](https://docs.chain.link/resources/fund-your-contract) with a sufficient amount of LINK to cover Chainlink oracle fees required for contract interactions, especially before calling the win function.
3. Execute the following command
    ```bash
    node tests/interactWithBet.js
    ```
