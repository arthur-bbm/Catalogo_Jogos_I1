import { createContext, useState } from 'react';

export const JogosContext = createContext();

export function JogosProvider({ children }) {
  const [jogos, setJogos] = useState([]);

  return (
    <JogosContext.Provider value={{ jogos, setJogos }}>
      {children}
    </JogosContext.Provider>
  );
}