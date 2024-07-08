import { MarketData } from './marketData';
import { Transaction } from './transaction';
import { UserProfile } from './profile';

export interface MarketDataResponse {
    data: MarketData;
}

export interface TransactionHistoryResponse {
    data: Transaction[];
}

export interface UserProfileResponse {
    data: UserProfile;
}
