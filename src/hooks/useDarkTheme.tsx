'use client';

import { useContext } from "react";
import { DARK_MODE } from "../constants/constant";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useDarkTheme() {
    const { theme } = useContext(ThemeContext);
    return theme === DARK_MODE;
}