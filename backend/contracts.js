const { ethers } = require("ethers");
const contractABI = require("./abi/Ticketing.json"); // ABI from Hardhat
const contractAddress = "0x..."; // Deployed contract address

const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const ticketingContract = new ethers.Contract(contractAddress, contractABI, signer);

async function issueTicket(ticketId, userWalletAddress) {
  const tx = await ticketingContract.issueTicket(ticketId, { from: userWalletAddress });
  await tx.wait();
  return tx.hash;
}