import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ScoreProvider } from "../context/ScoreContext.js";
import { CardProvider } from "../context/CardContext";

import AnimatedApp from "./AnimatedApp.jsx";

const App = () => {
  return (
    <ScoreProvider>
      <CardProvider>
        <BrowserRouter basename="/Memory-Game---React/">
          <AnimatedApp />
        </BrowserRouter>
      </CardProvider>
    </ScoreProvider>
  );
};

export default App;

// basename="/Memory-Game---React/"
