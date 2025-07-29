import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ScoreProvider } from "../context/ScoreContext.js";
import AnimatedApp from "./AnimatedApp.jsx";

const App = () => {
  return (
    <ScoreProvider>
      <BrowserRouter basename="/Memory-Game---React/">
        <AnimatedApp />
      </BrowserRouter>
    </ScoreProvider>
  );
};

export default App;
