export interface User {
    id: string;
    email: string;
    preferences?: UserPreferences;
}

export interface UserPreferences {
    notifications: boolean;
    theme: 'light' | 'dark';
}
