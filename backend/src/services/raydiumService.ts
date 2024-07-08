import axios from 'axios';

const RAYDIUM_API_BASE_URL = 'https://api.raydium.io/v2/main/price';

export const getMemeCoinDetailsFromRaydium = async (address: string) => {
    try {
        const response = await axios.get(`${RAYDIUM_API_BASE_URL}/${address}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch meme coin details from Raydium: ${error.message}`);
        throw new Error('Failed to fetch meme coin details from Raydium');
    }
};
