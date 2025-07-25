import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScoreProvider } from "./context/ScoreContext";
// import Home from "./pages/Home";
// import Level1 from "./pages/Level1";
// import Level2 from "./pages/Level2";
// import LevelComplete from "./pages/LevelComplete";

import KomponentTest from "./components/KomponentTest";

// import { useContext } from "react";

const App = () => {
  // const { score } = useContext(ScoreContext);
  // console.log(score);

  return (
    <ScoreProvider>
      <div>
        webpack nie jest idenalnum narzędziem więc się go uczę na błędach!
      </div>
      <p>a przy okazji uczę się react router</p>
      <KomponentTest />
    </ScoreProvider>

    //   <ScoreProvider>
    //     <BrowserRouter basename="/react-memory-game">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/level1" element={<Level1 />} />
    //         <Route path="/level2" element={<Level2 />} />
    //         <Route path="/complete" element={<LevelComplete />} />
    //       </Routes>
    //     </BrowserRouter>
    //   </ScoreProvider>
  );
};

export default App;
