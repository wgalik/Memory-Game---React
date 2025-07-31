import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import { CardContext } from "../context/CardContext";

import { generateCards, generateGame, gameResult } from "../logic/functions";

import "../styles/GameBoard.scss";

const GameBoard = ({ level, timerMinutes, pairsCount }) => {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const { addPoints } = useContext(ScoreContext);
  const { cardsColor } = useContext(CardContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffled = generateCards(cardsColor, pairsCount);
    setCards(shuffled.map((color, i) => ({ id: i, color })));
  }, [cardsColor]);

  const gameCards = cards.map((card) => (
    <div key={card.id} className={`card ${card.color}`}></div>
  ));

  generateGame(cards, timerMinutes, pairsCount);

  const handleNextClick = () => {
    addPoints(gameResult);
    switch (level) {
      case 1:
        navigate("/level2");
        break;
      case 2:
        navigate("/level3");
        break;
      case 3:
        navigate("/complete");
        break;
      default:
        navigate("*");
    }
  };
  const handleResetClick = () => {
    navigate(`/level${level}`);
  };
  return (
    <section className={`game-board level_${level}`}>
      <h2>Level {level}</h2>
      <p id="timer">Get ready</p>
      <section
        className={`grid-container animate__animated animate__fadeIn animate__delay-1s level_${level}`}
      >
        {gameCards}
      </section>

      <div className="next-level animate__animated animate__fadeIn animate__delay-2s">
        <h3></h3>
        <button className={`btn-lvl_${level}`} onClick={handleNextClick}>
          {level === 3 ? (
            <span>Game Over – View Summary</span>
          ) : (
            <span>Next level</span>
          )}
        </button>
        <button onClick={handleResetClick}>
          <span>Try again</span>
        </button>
      </div>
    </section>
  );
};

export default GameBoard;
