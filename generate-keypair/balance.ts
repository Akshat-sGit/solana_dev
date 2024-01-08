// import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";


// const suppliedPublicKey = process.argv[2];
// if(!suppliedPublicKey) {
//   console.log('Please provide a public key');
//   process.exit(1);
// }

// const publicKey = new PublicKey(suppliedPublicKey); 

// // const address = new PublicKey('GUjT8FyoNK2dakXbu2GZ5EECzy4w9j4Eix9wiZHCZUmX');

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const balance = await connection.getBalance(publicKey);

// const balanceInSol = balance / LAMPORTS_PER_SOL;

// console.log(`The balance of the account at ${publicKey} is ${balanceInSol} SOL`); 

// console.log(`✅ Finished!`)




import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const mainnetEndpoint = "https://api.mainnet-beta.solana.com"; // Mainnet endpoint
const suppliedWalletAddress = "toly.sol"; // Wallet address to look up

const connection = new Connection(mainnetEndpoint, "confirmed");

const publicKey = new PublicKey(suppliedWalletAddress);

const fetchBalance = async () => {
  try {
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    console.log(
      `✅ Finished! The balance for the wallet at address ${publicKey.toString()} is ${balanceInSOL} SOL!`
    );
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

fetchBalance();
