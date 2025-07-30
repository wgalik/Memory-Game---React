import React, { useEffect } from "react";

let intervalId = null;
export let gameResult = 0;
export const generateCards = (colors, pairsCount) => {
  const selected = colors.slice(0, pairsCount);
  const duplicated = [...selected, ...selected];
  return shuffle(duplicated);
};

const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

///////////////////////////////////////////////////
export const generateGame = (cards, timerMinutes, pairsCount) => {
  useEffect(() => {
    const allCards = document.querySelectorAll("div.card");
    // const timer = document.querySelector("#timer");
    let activeCards = [];
    gameResult = 0;

    const clickCard = (event) => {
      const clicked = event.target;
      if (!clicked.classList.contains("hidden") || clicked === activeCards[0])
        return;

      clicked.classList.remove("hidden");

      if (activeCards.length === 0) {
        activeCards[0] = clicked;
        return;
      }

      activeCards[1] = clicked;
      allCards.forEach((card) => card.removeEventListener("click", clickCard));

      setTimeout(() => {
        const isMatch = activeCards[0].className === activeCards[1].className;
        if (isMatch) {
          activeCards.forEach((card) => card.classList.add("off"));
          gameResult++;
          if (gameResult === pairsCount) {
            allCards.forEach((card) =>
              card.removeEventListener("click", clickCard)
            );
            clearInterval(intervalId);
            showNextButton();
          }
        } else {
          activeCards.forEach((card) => card.classList.add("hidden"));
        }

        allCards.forEach((card) => card.addEventListener("click", clickCard));
        activeCards = [];
      }, 750);
    };

    const timeout = setTimeout(() => {
      // timer.style.opacity = 1;
      allCards.forEach((card) => {
        card.classList.add("hidden");
        card.addEventListener("click", clickCard);
      });
      startTimer(timerMinutes);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [cards]);

  const startTimer = (minutes) => {
    let time = minutes * 60;
    const timerElement = document.getElementById("timer");

    intervalId = setInterval(() => {
      const min = Math.floor(time / 60);
      const sec = time % 60;
      timerElement.textContent = `${min.toString().padStart(2, "0")}:${sec
        .toString()
        .padStart(2, "0")}`;

      if (time <= 0) {
        clearInterval(intervalId);
        showNextButton();
      }
      time--;
    }, 1000);
  };
};

const showNextButton = () => {
  const gridContainer = document.querySelector(".grid-container");
  const button = document.querySelector("button");
  gridContainer.classList.remove("animate__fadeIn");
  gridContainer.classList.add("animate__fadeOut");
  button.style.display = "block";
};
