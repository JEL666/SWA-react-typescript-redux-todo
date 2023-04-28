import { useState } from "react";

const useLocalStorage = <T>(key: string, intialValue: T): [T, typeof setValue] => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : intialValue;
        } catch (error) {
            console.error(error);
            return intialValue;
        }
    })

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }
    return [storedValue, setValue];
};

export default useLocalStorage;