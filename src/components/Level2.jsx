import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";

const Level2 = () => {
  const navigate = useNavigate();
  const { addPoints } = useContext(ScoreContext);

  const handleClick = () => {
    addPoints(10);
    navigate("/complete");
  };
  return (
    <div>
      <h2>Lvl_2</h2>

      <button onClick={handleClick}>Next page</button>
    </div>
  );
};

export default Level2;
