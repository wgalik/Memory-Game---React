import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const addPoints = (points) => setScore((prevPoints) => prevPoints + points);
  const resetPoints = () => setScore(0);

  return (
    <ScoreContext.Provider value={{ score, addPoints, resetPoints }}>
      {children}
    </ScoreContext.Provider>
  );
};
