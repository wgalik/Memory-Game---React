import React, { createContext } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const cardsColor = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "brown",
    "gray",
    "lightgreen",
    "cadetblue",
    "violet",
    "cyan",
  ];

  return (
    <CardContext.Provider value={{ cardsColor }}>
      {children}
    </CardContext.Provider>
  );
};
