const { ethers } = require("hardhat");

const main = async () => {
    const whitelistContractFactory = await ethers.getContractFactory("Whitelist");
    const whitelistContract = await whitelistContractFactory.deploy(10);
    await whitelistContract.deployed();

    console.log("Whitelist contract address:", whitelistContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }   catch (error){
        console.log(error);
        process.exit(1);
    }
}

runMain();