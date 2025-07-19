
export const startRandomBoolInterval = (intervalMs: number = 2000, probability: number = 0.3, setRandomBool : (outcome:boolean) => void) => {
    const interval = setInterval(() => {
        let outcome = Math.random() < probability;
        setRandomBool(outcome);
    }, intervalMs);
    
    return interval;
};
