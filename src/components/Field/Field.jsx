import React, { useEffect, useCallback, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

import {
  setCardArray,
  addCard,
  clear,
  complited,
  unComplited,
  endGame,
  addCounter,
  resetCardArray,
} from "../../store/actions/actions";

// Components
import Card from "../Card";

// Helpers function
import { shuffle } from "../../helpers";

// Assets
import classes from "./Field.module.css";

const Field = () => {
  // Array with cards
  const cardArray = useSelector(({ cardsReducer }) => cardsReducer.cards);

  // Array with selected cards
  const selectedCards = useSelector(
    ({ selectedCardsReducer }) => selectedCardsReducer.selectedCard
  );

  // Round counter
  const counter = useSelector(({ counterReducer }) => counterReducer.counter);

  const dispatch = useDispatch();

  // Shuffle array with cards before renders
  useEffect(() => {
    const shuffleCardArray = shuffle(cardArray);
    dispatch(resetCardArray(shuffleCardArray));
  }, []);

  // Output of game's end
  useEffect(() => {
    if (counter === 8) {
      setTimeout(() => {
        dispatch(endGame());
      }, 1500);
    }
  }, [counter]);

  // Checking cards for equality
  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      firstCard.key === secondCard.key ? complitedCard() : unCompletedCard();
      dispatch(clear());
    }
  }, [selectedCards]);

  // Flip and hide cards
  const changeCard = (keyValue) => {
    const [firstCard, secondCard] = selectedCards;
    setTimeout(() => {
      const newCardArray = cardArray.map((card) => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
          card[keyValue] = !card[keyValue];
        }
        return card;
      });
      dispatch(setCardArray(newCardArray));
    }, 1000);
  };

  // If the cards are equal
  const complitedCard = () => {
    const [firstCard, secondCard] = selectedCards;
    if (firstCard.id === secondCard.id) {
      return;
    }
    changeCard("complited");
    dispatch(addCounter());
    dispatch(complited());
  };

  // If the cards are not equal
  const unCompletedCard = () => {
    changeCard("hide");
    dispatch(unComplited());
  };

  // Click on the card
  const clickHandler = useCallback((event) => {
    const idCard = +event.target.closest("li").dataset.id;
    const keyCard = event.target.closest("li").dataset.value;

    const selectCard = {
      id: idCard,
      key: keyCard,
    };

    // Add selected card to the [selectedArray]
    dispatch(addCard(selectCard));
    dispatch(setCardArray(idCard));
  }, []);

  // Render cards

  const cards = cardArray.map(({ id, key, hide, complited, img }) => {
    return (
      <Card
        key={id}
        keyValue={key}
        clickHandler={clickHandler}
        id={id}
        hide={hide}
        complited={complited}
        img={img}
      />
    );
  });
  return (
    <div className={classes.field}>
      <ul className={classes.cardList}>{cards}</ul>
    </div>
  );
};

export default Field;
