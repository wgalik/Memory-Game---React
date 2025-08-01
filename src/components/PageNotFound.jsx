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
      <h6>404 – Page Not Found</h6>
      <p>You’ve reached a dead end</p>
      <button onClick={handleClick}>
        <span>Back to the beginning</span>
      </button>
    </section>
  );
};

export default PageNotFound;
