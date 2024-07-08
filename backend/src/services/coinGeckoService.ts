import axios from 'axios';

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCoinDetails = async (coinId: string) => {
    try {
        const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/${coinId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch coin details from CoinGecko: ${error.message}`);
        throw new Error('Failed to fetch coin details from CoinGecko');
    }
};

export const getMarketData = async (coinId: string) => {
    try {
        const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/${coinId}/market_chart`, {
            params: {
                vs_currency: 'usd',
                days: '1',
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch market data from CoinGecko: ${error.message}`);
        throw new Error('Failed to fetch market data from CoinGecko');
    }
};
