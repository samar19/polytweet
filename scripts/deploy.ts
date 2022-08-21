const hre = require("hardhat");


async function main() {
 
  const ERC721 = await hre.ethers.getContractFactory("ERC721");
  const poly = await ERC721.deploy(ERC721.address);
  await poly.deployed();
  console.log("ERC721 deployed to:", poly.address);

  let config = `
 
  export const ERC721address = "${poly.address}"
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
