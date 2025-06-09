'use client';

import { createContext, useEffect, useState } from "react";
import { DARK_MODE, LIGHT_MODE, THEME } from "../constants/constant";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: LIGHT_MODE,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState(LIGHT_MODE);

    useEffect(() => {
        const currentStoredTheme = localStorage.getItem(THEME);
        const isSystemPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = currentStoredTheme || (isSystemPrefersDarkMode ? DARK_MODE : LIGHT_MODE);
        setTheme(initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setTheme(newTheme);
        localStorage.setItem(THEME, newTheme);
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}
