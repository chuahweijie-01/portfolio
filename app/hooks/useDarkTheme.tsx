'use client';

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { DARK_MODE } from "../constants/constant";

export default function useDarkTheme() {
    const { theme } = useContext(ThemeContext);
    return theme === DARK_MODE;
}