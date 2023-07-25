import { createContext, useState } from "react";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [ isGameOn, setIsGameOn ] = useState(false);
  const [ lastScore, setLastScore ] = useState(0);
  const [ bugs, setBugs ] = useState([]);
  const [ score, setScore ] = useState(0);

  return (
    <GameContext.Provider value={{ isGameOn, setIsGameOn, lastScore, setLastScore, bugs, setBugs, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
