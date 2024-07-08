import dotenv from 'dotenv';

dotenv.config();

export const config = {
    solana: {
        network: process.env.SOLANA_NETWORK as string,
        tokenMintAddress: process.env.TOKEN_MINT_ADDRESS as string,
    },
    supabase: {
        url: process.env.SUPABASE_URL as string,
        key: process.env.SUPABASE_KEY as string,
    },
    mongoURI: process.env.MONGO_URI as string,
};
