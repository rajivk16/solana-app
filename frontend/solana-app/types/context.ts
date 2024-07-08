import { User, UserPreferences } from './user';
import { MarketData } from './marketData';
import { Transaction } from './transaction';

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    updateProfile: (preferences: UserPreferences) => Promise<void>;
}

export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export interface AppContextType {
    marketData: MarketData;
    transactionHistory: Transaction[];
}
