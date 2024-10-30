const { ethers } = require('ethers');
console.log(ethers.version);
require('dotenv').config();

const { ammAddress, ammAbi, tcoinAddress, tcoinAbi } = require('./constant');

const GETDATE = (date1) => {
    const date = new Date(date1 * 1000);
    return date.toString();
}
const getEthereumContract = (address, abi, signer) => {
    const TransactionContract = new ethers.Contract(address, abi, signer);
    return TransactionContract
}
(async () => {

    const alchemy = ethers.getDefaultProvider('sepolia', { alchemy: process.env.ALCHEMY_API_KEY, });
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY_WALLET);
    const connectedWallet = signer.connect(alchemy);
    const AMMcontract = getEthereumContract(ammAddress, ammAbi, connectedWallet);
    const TCOINcontract = getEthereumContract(tcoinAddress, tcoinAbi, connectedWallet);

    // ******************************call addliquidity********************************//
    /*
    // TCOIN amount
    const amountToApprove = ethers.parseUnits("600", 6);
    console.log(amountToApprove);
    const approveTx = await TCOINcontract.approve(AMMcontract.target, amountToApprove);
    await approveTx.wait();
    const allowanceValue = await TCOINcontract.allowance(signer.address, AMMcontract.target);
    console.log("Allowance Value:", ethers.formatUnits(allowanceValue, 6)); // Convert from smallest units to tcoin
    //ETH amount
    const valueInWei = ethers.parseUnits("0.0006", "ether");
    const val1 = BigInt(valueInWei);
    console.log(val1);

    const tx = await AMMcontract.addLiquidity(allowanceValue, { value: val1 });
    await tx.wait();
    console.log(tx);
    receipt = null;
    while (receipt === null) {
        receipt = await alchemy.getTransactionReceipt(tx.hash);
        if (receipt === null) {
            console.log('Waiting for transaction to be mined...');
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        }
    }
    console.log(receipt);
    console.log('Transaction Status:', receipt.status === 1 ? 'Success' : 'Failure');

    let balanceAMMInEther = await alchemy.getBalance(AMMcontract.target);
    let balanceAMMInEther_tcoinvalue = await AMMcontract.getBalanceOfERC20(AMMcontract.target);
    let balanceAmmInEther_ethValue = ethers.formatEther(balanceAMMInEther);
    console.log(`Balance of AMM on eth : ${balanceAmmInEther_ethValue} ETH`);
    console.log(`Balance of AMM on tcoin: ${balanceAMMInEther_tcoinvalue / 10 ** 6} TCOIN`);*/

    // ******************************call swap********************************// 
    const etherAmount2 = ethers.parseUnits("0.0003", "ether");
    const val = BigInt(etherAmount2);
    const txSwap = await AMMcontract.swap(0, { value: val });
    await txSwap.wait();
    console.log(txSwap);
    receipt = null;
    while (receipt === null) {
        receipt = await alchemy.getTransactionReceipt(txSwap.hash);
        if (receipt === null) {
            console.log('Waiting for transaction to be mined...');
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        }
    }
    console.log(receipt);
    console.log('Transaction Status:', receipt.status === 1 ? 'Success' : 'Failure');
    //TEST GET RATE
    console.log("rate ether", parseFloat((await AMMcontract.getRate("ether")).toString()) / 10 ** 12);
})();