import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScoreProvider } from "./context/ScoreContext";
import Home from "./components/Home";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2.jsx";
import LevelComplete from "./components/LevelComplete";

const App = () => {
  return (
    <ScoreProvider>
      <BrowserRouter basename="/react-memory-game">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/complete" element={<LevelComplete />} />
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  );
};

export default App;
