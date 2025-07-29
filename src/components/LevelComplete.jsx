import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ScoreContext } from "../context/ScoreContext";

const LevelComplete = () => {
  const navigate = useNavigate();

  const { score } = useContext(ScoreContext);

  const handleClick = () => {
        navigate("/");
  };

  return (
    <div>
      <h6 animate__fadeIn>game complited</h6>
      <p>Twoje punkty: {score}</p>
      <button onClick={handleClick}>Back to the beginning</button>
    </div>
  );
};

export default LevelComplete;
