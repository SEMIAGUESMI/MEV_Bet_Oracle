const {ethers} = require("hardhat");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

function convertDateToTimestamp(dateString) {
  const date = new Date(dateString);
  const timestamp = Math.floor(date.getTime() / 1000); // Convert to seconds
  return timestamp;
}
module.exports = buildModule("Bet", (m) => {
  const humanReadableDate = "31 october 2024 23:00:00"; 
  const timestamp1= convertDateToTimestamp(humanReadableDate);
  
  const oracle = m.contract("Bet", ["0xe1E89120C62a0EF01Fc379849f44572c73dc3583", "0x3B826251264d1148357215EAA07896b62994068A", 1, timestamp1]);
  return { contractaddress: oracle.address };  
});

