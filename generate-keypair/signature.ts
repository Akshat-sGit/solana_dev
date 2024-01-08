import {AccountMeta, Connection, Keypair, PublicKey, Transaction, sendAndConfirmTransaction, TransactionInstruction } from "@solana/web3.js";

export type TransactionInstructionCtorFields = {
  keys: Array<AccountMeta>;
  programId: PublicKey;
  data?: Buffer;
};

async function callProgram(
  connection: Connection,
  payer: Keypair,
  programId: PublicKey,
  programDataAccount: PublicKey,
) {
  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: programDataAccount,
        isSigner: false,
        isWritable: true,
      },
    ],
    programId,
  });

  const transaction = new Transaction().add(instruction);

  const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer],
  );

  console.log(`✅ Success! Transaction signature is: ${signature}`);
}
