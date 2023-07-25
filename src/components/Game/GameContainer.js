import React, { useContext, useEffect } from "react";
import Bug from "./Bug";
import Scoreboard from "./Scoreboard";
import Button from "../UI/Button";
import GameContext from "../../store/GameContext";

const GameContainer = () => {
  const { isGameOn, setIsGameOn, lastScore, setLastScore, bugs, setBugs, score, setScore } = useContext(GameContext);

  const startGame = () => {
    setIsGameOn(true);
    setScore(0);
    setLastScore(0);

    const interval = setInterval(() => {
      setBugs((prevElements) => [ ...prevElements, getRandomPosition() ]);
    }, Math.floor(Math.random() * 1000) + 500);

    setTimeout(() => {
      setIsGameOn(false);
      setBugs([]);
      clearInterval(interval);
    }, 60000);
  };

  const handleBugClick = (bugId) => {
    setBugs((prevBugs) => prevBugs.filter((bug) => bug.id !== bugId));
    setScore((prevScore) => prevScore + 1);
  };

  const getRandomPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const randomX = Math.random() * (screenWidth - 100);
    const randomY = Math.random() * (screenHeight - 100);
    return { x: randomX, y: randomY, id: Date.now() };
  };

  useEffect(() => {
    if (!isGameOn) {
      setLastScore(score);
    }
  }, [ isGameOn, score, setLastScore ]);

  return (
    <>
      {isGameOn ? (
        <>
          <Scoreboard score={score} />
          {bugs.map((bug) => (
            <Bug key={bug.id} position={bug} onClick={() => handleBugClick(bug.id)} />
          ))}
        </>
      ) : (
        <>
          <h1 className="py-5">Welcome to Bug Squasher</h1>
          {lastScore > 0 && <p>Last score: {lastScore}</p>}
          <Button btnClasses="btn btn-primary btn-lg" onClick={() => startGame()} />
        </>
      )}
    </>
  );
};

export default GameContainer;
