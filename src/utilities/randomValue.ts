
import { useEffect, useState, useRef } from 'react';

export const useRandomBool = (intervalMs: number = 2000, probability: number = 0.3) => {
    const [randomBool, setRandomBool] = useState<boolean>(false);
    const callbackRef = useRef<() => void>(undefined);
    
    useEffect(() => {
        callbackRef.current = () => {
            const outcome = Math.random() < probability;
            setRandomBool(outcome);
        };
    }, [probability]);
    
    useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current();
        }
        
        const interval = setInterval(() => {
            if (callbackRef.current) {
                callbackRef.current();
            }
        }, intervalMs);
        
        return () => clearInterval(interval);
    }, [intervalMs]);
    
    return randomBool;
};
