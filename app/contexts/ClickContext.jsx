'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { getOrCreateUserId } from "../utils/userId";

const ClickContext = createContext();

export const ClickContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const id = getOrCreateUserId();
        setUserId(id);
    }, []);

    const incrementClick = () => {
        if (!userId) {
            return;
        }
        setCount(prev => prev + 1);
    };

    const decrementClick = () => {
        if (!userId || count <= 0) {
            return;
        }
        setCount(prev => Math.max(prev - 1, 0));
    };

    return (
        <ClickContext.Provider value={{ count, incrementClick, decrementClick }}>
            {children}
        </ClickContext.Provider>
    )
}

export const useClick = () => useContext(ClickContext);