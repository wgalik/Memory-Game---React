import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/GameComplete.scss";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="end-page">
      <h6>You’ve reached a dead end</h6>

      <button onClick={handleClick}>
        <span>Back to the beginning</span>
      </button>
    </section>
  );
};

export default PageNotFound;
