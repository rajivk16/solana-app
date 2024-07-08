// import React, { createContext, useState, ReactNode } from 'react';
// import { MarketData, Transaction } from '../types/context';

// interface AppContextType {
//     marketData: MarketData | null;
//     transactionHistory: Transaction[];
//     setMarketData: (data: MarketData) => void;
//     setTransactionHistory: (data: Transaction[]) => void;
// }

// export const AppContext = createContext<AppContextType | null>(null);

// interface Props {
//     children: ReactNode;
// }

// export const AppProvider: React.FC<Props> = ({ children }) => {
//     const [marketData, setMarketData] = useState<MarketData | null>(null);
//     const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);

//     return (
//         <AppContext.Provider value={{ marketData, transactionHistory, setMarketData, setTransactionHistory }}>
//             {children}
//         </AppContext.Provider>
//     );
// };


import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { AppContextType, MarketData, Transaction } from '../types/context';

export const AppContext = createContext<AppContextType | null>(null);

interface Props {
    children: ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [marketData, setMarketData] = useState<MarketData | null>(null);
    const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get<MarketData>('/api/analytics');
                setMarketData(response.data);
            } catch (error) {
                console.error('Error fetching market data:', error);
            }
        };

        const fetchTransactionHistory = async () => {
            try {
                const response = await axios.get<Transaction[]>('/api/transactions');
                setTransactionHistory(response.data);
            } catch (error) {
                console.error('Error fetching transaction history:', error);
            }
        };

        fetchMarketData();
        fetchTransactionHistory();
    }, []);

    return (
        <AppContext.Provider value={{ marketData, transactionHistory }}>
            {children}
        </AppContext.Provider
