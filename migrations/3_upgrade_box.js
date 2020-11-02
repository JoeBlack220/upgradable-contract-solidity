// migrations/4_prepare_upgrade_boxv2.js
const Box = artifacts.require('PBox');
const BoxV2 = artifacts.require('PBoxV2');

const { prepareUpgrade } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
    const box = await Box.deployed();
    await prepareUpgrade(box.address, BoxV2, { deployer });
};