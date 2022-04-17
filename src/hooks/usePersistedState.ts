import { useState, Dispatch, SetStateAction, useEffect } from "react";

type Return<Type> = [Type, Dispatch<SetStateAction<Type>>];

function usePersistedState<Type>(
  key: string,
  inicialState: Type
): Return<Type> {
  const [state, setState] = useState(inicialState);

  useEffect(() => {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue) {
      setState(JSON.parse(localStorageValue));
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default usePersistedState;
