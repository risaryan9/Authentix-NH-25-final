async function main() {
  const Ticketing = await ethers.getContractFactory("Ticketing");
  const ticketing = await Ticketing.deploy();
  await ticketing.deployed();
  console.log("Ticketing deployed to:", ticketing.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});