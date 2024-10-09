"use client"
import { useState } from 'react';

const useSessionStorage = <T>(keyName: string, defaultValue?: T): [T | undefined, (newValue: T) => void, () => T | undefined] => {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const value = window.sessionStorage.getItem(keyName);

        if (value) {
            return JSON.parse(value);
        } else {
            if(defaultValue == undefined) return defaultValue;
            window.sessionStorage.setItem(keyName, typeof defaultValue == 'string' ? defaultValue : JSON.stringify(defaultValue));
            return defaultValue;
        }
    } catch (err) {
        try {
            const value = window.sessionStorage.getItem(keyName);
            if (value) return value;
        }catch(e){}
        return defaultValue;
    }
  });

    const tryAgain = () => {
        let data = defaultValue;
        try {
            const value = window.sessionStorage.getItem(keyName);
    
            if (value) {
                data = JSON.parse(value);
            } else {
                window.sessionStorage.setItem(keyName, typeof defaultValue == 'string' ? defaultValue : JSON.stringify(defaultValue));
            }
        } catch (err) {
            try {
                const value = window.sessionStorage.getItem(keyName);
                if (value) data = value as T;
            } catch(e){}
        }
        setStoredValue(data);
        return data;
    }

    const setValue = (newValue: T) => {
        try {
        window.sessionStorage.setItem(keyName, typeof newValue == 'string' ? newValue : JSON.stringify(newValue));
        } catch (err) {}
        setStoredValue(newValue);
    };

    
  return [storedValue, setValue, tryAgain];
};

export default useSessionStorage;