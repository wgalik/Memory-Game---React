import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Home from "./Home.jsx";
import Level1 from "./Level1.jsx";
import Level2 from "./Level2.jsx";
import Level3 from "./Level3.jsx";
import LevelComplete from "./LevelComplete.jsx";
import PageNotFound from "./PageNotFound.jsx";

import "../styles/AnimatedApp.scss";

const AnimatedApp = () => {
  const location = useLocation();
  const nodeRef = useRef(null);
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
            <Route
              path="/level1"
              element={<Level1 timerMinutes={0.3} pairsCount={6} />}
            />
            <Route
              path="/level2"
              element={<Level2 timerMinutes={1} pairsCount={9} />}
            />
            <Route
              path="/level3"
              element={<Level3 timerMinutes={1} pairsCount={12} />}
            />
            <Route path="/complete" element={<LevelComplete />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AnimatedApp;
