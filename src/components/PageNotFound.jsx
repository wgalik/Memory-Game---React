import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>PageNotFound</h2>

      <button onClick={handleClick}>Home Page</button>
    </div>
  );
};

export default PageNotFound;
