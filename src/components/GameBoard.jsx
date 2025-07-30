import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import { CardContext } from "../context/CardContext";

import { generateCards, generateGame, gameResult } from "../logic/functions";

import "../styles/GameBoard.scss";

const GameBoard = ({ level, timerMinutes, pairsCount }) => {
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

  const handleClick = () => {
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
    }
  };

  return (
    <>
      <h2>Lvl_{level}</h2>
      <p id="timer">{timerMinutes} minute</p>
      <section className="grid-container animate__animated animate__fadeIn animate__delay-1s">
        {gameCards}
      </section>
      <button
        className="lvl animate__animated animate__fadeIn animate__delay-1s"
        onClick={handleClick}
      >
        Next lvl
      </button>
    </>
  );
};

export default GameBoard;
