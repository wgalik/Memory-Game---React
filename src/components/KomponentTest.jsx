import React from "react";

import { ScoreContext } from "../context/ScoreContext";
import { useContext } from "react";

const KomponentTest = () => {
  const { score } = useContext(ScoreContext);

  return (
    <>
      <h1>Liczba punktów:</h1>
      <p>{score}</p>
      <h3>męczy mnie ten webpack, ciągle się wiesza</h3>
      <div>
        <p>nie do wiary</p>
        <p>ciągle coś</p>
        <p>czy teraz zadziała?</p>

        <h6>chyba tak</h6>
        <h5>jednak nie</h5>
      </div>
      <div>Może teraz</div>
      <div>Może teraz</div>
      <div>Może Ciągle nie</div>
      <div>Importy byłu w porządku
        <p>nie wime co się stał<object data="" type=""></object></p>
      </div>
    </>
  );
};

export default KomponentTest;
