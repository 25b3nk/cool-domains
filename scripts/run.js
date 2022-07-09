const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("hola");
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);
    console.log("Contract deployed by:", owner.address);

    let txn = await domainContract.register("baadshah", {value: hre.ethers.utils.parseEther('0.05')});
    await txn.wait();

    const domainOwner = await domainContract.getAddress("baadshah");
    console.log("Owner of domain:", domainOwner);

    // const txn2 = await domainContract.setRecord("baadshah", "My new domain");
    // await txn2.wait();

    // const recordData = await domainContract.connect(owner).getRecord("baadshah");
    // console.log("Domain record:", recordData);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
};

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
