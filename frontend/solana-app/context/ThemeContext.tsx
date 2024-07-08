import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextType } from '../types/context';

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
    children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
