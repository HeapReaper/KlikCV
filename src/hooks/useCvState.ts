import { useState, useEffect } from 'preact/hooks';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'cv-builder-data';

export const useCvState = (initialState: any) => {

  // Read
  const [state, setState] = useState(() => {
    try {
      const storedData = Cookies.get(COOKIE_NAME);
      return storedData ? JSON.parse(storedData) : initialState;
    } catch (e) {
      console.error("Failed to parse stored data from cookies:", e);
      return initialState;
    }
  });

  // Write
  useEffect(() => {
    try {
      Cookies.set(COOKIE_NAME, JSON.stringify(state), { expires: 365 });
    } catch (e) {
      console.error("Failed to save data to cookies:", e);
    }
  }, [state]);

  return [state, setState];
};
