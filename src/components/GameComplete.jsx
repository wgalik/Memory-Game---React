import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ScoreContext } from "../context/ScoreContext";

import "../styles/GameComplete.scss";

const GameComplete = () => {
  const navigate = useNavigate();

  const { score } = useContext(ScoreContext);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="end-page">
      <h6>Congratulations! You've completed the game.</h6>
      <p>Your final score: {score}</p>
      <button onClick={handleClick}>
        <span>Back to the beginning</span>
      </button>
    </section>
  );
};

export default GameComplete;
