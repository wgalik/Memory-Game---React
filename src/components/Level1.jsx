import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import { CardContext } from "../context/CardContext";

import { generateCards, generateGame } from "../logic/functions";

import "../styles/gameBoard.scss";

const Level1 = ({ timerMinutes, pairsCount }) => {
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

  generateGame(cards, timerMinutes);

  const handleClick = () => {
    addPoints(5);
    navigate("/level2");
  };

  return (
    <>
      <h2>Lvl_1</h2>
      <p id="timer">00:00</p>
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

export default Level1;
