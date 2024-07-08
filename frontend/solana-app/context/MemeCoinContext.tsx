import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from '@axios';
import { MemeCoinDetails } from '../types/memeCoin';

interface MemeCoinContextType {
    memeCoinDetails: MemeCoinDetails | null;
    fetchMemeCoinDetails: (address: string) => void;
}

export const MemeCoinContext = createContext<MemeCoinContextType | null>(null);

interface Props {
    children: ReactNode;
}

export const MemeCoinProvider: React.FC<Props> = ({ children }) => {
    const [memeCoinDetails, setMemeCoinDetails] = useState<MemeCoinDetails | null>(null);

    const fetchMemeCoinDetails = async (address: string) => {
        try {
            const response = await axios.get(`/api/meme-coins/${address}`);
            setMemeCoinDetails(response.data);
        } catch (error) {
            console.error('Failed to fetch meme coin details:', error);
        }
    };

    return (
        <MemeCoinContext.Provider value={{ memeCoinDetails, fetchMemeCoinDetails }}>
            {children}
        </MemeCoinContext.Provider>
    );
};
