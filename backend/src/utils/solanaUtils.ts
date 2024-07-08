import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com');

export const getAccountInfo = async (address: string) => {
    const publicKey = new PublicKey(address);
    return await connection.getAccountInfo(publicKey);
};
