// migrations/2_deploy_box.js
const Box = artifacts.require('PBox');

const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
    await deployProxy(Box, [42], { deployer, initializer: 'initialize' });
};