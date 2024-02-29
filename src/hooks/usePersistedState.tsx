import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const usePersistedState = (key: any, defaultValue: any) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
