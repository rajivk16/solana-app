import React, { createContext, useState, useEffect, ReactNode } from 'react';
import supabase from '../supabaseClient';
import { AuthContextType, UserPreferences, User } from '../types/context';

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
    children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session ? session.user : null);
        setLoading(false);

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session ? session.user : null);
        });

        return () => {
            authListener?.unsubscribe();
        };
    }, []);

    const register = async (email: string, password: string) => {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setUser(user);
    };

    const login = async (email: string, password: string) => {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        setUser(user);
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setUser(null);
    };

    const updateProfile = async (preferences: UserPreferences) => {
        const { data, error } = await supabase
            .from('profiles')
            .update({ preferences })
            .eq('id', user?.id);
        if (error) throw error;
        setUser((prevUser) => (prevUser ? { ...prevUser, ...data } : null));
    };

    return (
        <AuthContext.Provider value={{ user, loading, register, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
