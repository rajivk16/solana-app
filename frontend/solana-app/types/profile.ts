import { UserPreferences } from './user';

export interface UserProfile {
    id: string;
    email: string;
    preferences: UserPreferences;
}
