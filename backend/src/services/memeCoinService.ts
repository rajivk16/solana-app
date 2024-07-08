import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com');

export const getMemeCoinDetails = async (address: string) => {
    const publicKey = new PublicKey(address);
    const accountInfo = await connection.getAccountInfo(publicKey);
    if (!accountInfo) throw new Error('Account not found');

    // Process accountInfo to extract relevant meme coin details
    const details = {
        lamports: accountInfo.lamports,
        owner: accountInfo.owner.toString(),
        data: accountInfo.data.toString('hex'),
    };

    return details;
};
