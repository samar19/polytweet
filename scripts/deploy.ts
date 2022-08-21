const hre = require("hardhat");



async function main() {
 
  const MyToken  = await hre.ethers.getContractFactory("MyToken");
  const poly = await MyToken.deploy();
  await poly.deployed();
  console.log("MyToken  deployed to:", poly.address);

  let config = `
 
  export const MyTokenaddress = "${poly.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
