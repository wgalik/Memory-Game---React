import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Home from "./Home.jsx";
import GameBoard from "./GameBoard.jsx";
import LevelComplete from "./LevelComplete.jsx";
import PageNotFound from "./PageNotFound.jsx";

import "../styles/AnimatedApp.scss";

const AnimatedApp = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  let levels = [
    {
      level: 1,
      timerMinutes: 0.3,
      pairsCount: 6,
      path: "/level1",
    },
    {
      level: 2,
      timerMinutes: 0.5,
      pairsCount: 9,
      path: "/level2",
    },
    {
      level: 3,
      timerMinutes: 1,
      pairsCount: 12,
      path: "/level3",
    },
  ];

  levels = levels.map((level) => (
    <Route
      path={level.path}
      element={
        <GameBoard
          level={level.level}
          timerMinutes={level.timerMinutes}
          pairsCount={level.pairsCount}
        />
      }
    />
  ));

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={500}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            {levels}
            <Route path="/complete" element={<LevelComplete />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AnimatedApp;
