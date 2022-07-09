const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("hola");
    await domainContract.deployed();

    console.log("Contract deployed to:", domainContract.address);

    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
    let txn = await domainContract.register("baadshah",  {value: hre.ethers.utils.parseEther('0.05')});
    await txn.wait();
    console.log("Minted domain baadshah.hola");

    txn = await domainContract.setRecord("baadshah", "baadshah says hola!");
    await txn.wait();
    console.log("Set record for baadshah.hola");

    const address = await domainContract.getAddress("baadshah");
    console.log("Owner of domain baadshah:", address);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();