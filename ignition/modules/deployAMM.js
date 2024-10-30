const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AMM", (m) => {
    const tokenaddress= "0x3B826251264d1148357215EAA07896b62994068A"; // TCOIN address
  const ammContract = m.contract("AMM", [tokenaddress]);
  return { ammaddress: ammContract.address };  
});