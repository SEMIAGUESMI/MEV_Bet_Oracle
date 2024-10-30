//TCOIN
const deployedTcoinJson = require("../ignition/deployments/chain-11155111/artifacts/TCOIN#TCOIN.json");
const tcoinAddress = "0x3B826251264d1148357215EAA07896b62994068A";
const tcoinAbi = deployedTcoinJson.abi;

//AMM
const deployedAmmJson = require("../ignition/deployments/chain-11155111/artifacts/AMM#AMM.json");
const ammAddress = "0xe1E89120C62a0EF01Fc379849f44572c73dc3583";
const ammAbi = deployedAmmJson.abi;

//Bet
const deployedBetJson = require("../ignition/deployments/chain-11155111/artifacts/Bet#Bet.json");
const betAddress = "0x823120a161B0Ad6271B4e276554a6C4690385BE2";
const betAbi = deployedBetJson.abi;

module.exports = {
    tcoinAddress,
    tcoinAbi,
    ammAddress,
    ammAbi,
    betAddress,
    betAbi
};


