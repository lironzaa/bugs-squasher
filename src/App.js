import React from "react";
import './App.css';
import { GameProvider } from "./store/GameContext";
import GameContainer from "./components/Game/GameContainer";

function App() {
  return (
    <div className="app-container">
      <GameProvider>
        <GameContainer />
      </GameProvider>
    </div>
  );
}

export default App;
