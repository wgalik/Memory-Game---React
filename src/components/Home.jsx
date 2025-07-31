import React, { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";
import { useNavigate } from "react-router-dom";

import "../styles/Home.scss";

const Home = () => {
  const { resetPoints } = useContext(ScoreContext);
  const navigate = useNavigate();

  const handleClick = () => {
    resetPoints();
    navigate("/level1");
  };

  return (
    <section className="welcome-page">
      <h1>Welcome to the game</h1>

      <button onClick={handleClick}>
        <span>Let's start</span>
      </button>
    </section>
  );
};

export default Home;
