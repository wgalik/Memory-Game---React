import React from "react";

import { ScoreContext } from "../context/ScoreContext";
import { useContext } from "react";

const KomponentTest = () => {
  const { score } = useContext(ScoreContext);

  return (
    <>
      <h1>Liczba punktów:</h1>
      <p>{score}</p>
    </>
  );
};

export default KomponentTest;
