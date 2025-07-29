import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";

const Level1 = () => {
  const navigate = useNavigate();
  const { addPoints } = useContext(ScoreContext);

  const handleClick = () => {
    addPoints(5);
    navigate("/level2");
  };
  return (
    <div >
      <h2>Lvl_1</h2>

      <button onClick={handleClick}>Next lvl</button>
    </div>
  );
};

export default Level1;
