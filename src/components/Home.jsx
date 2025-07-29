import React, { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { resetPoints } = useContext(ScoreContext);
  const navigate = useNavigate();

  const handleClick = () => {
    resetPoints();
    navigate("/level1");
  };

  return (
    <div>
      <h1>Home page</h1>

      <button onClick={handleClick}>First lvl</button>
    </div>
  );
};

export default Home;
