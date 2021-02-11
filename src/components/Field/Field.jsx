import React, { useEffect, useCallback } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

import {
  setCardsArray,
  addCard,
  clear,
  endGame,
  addCounter,
  resetCardsArray,
} from "../../store/actions/actions";

// Components
import Card from "../Card";

// Helpers function
import { shuffle } from "../../helpers";

// Assets
import classes from "./Field.module.css";

const Field = () => {
  const cardArray = useSelector(({ cardsReducer }) => cardsReducer.cards);

  const selectedCards = useSelector(
    ({ selectedCardsReducer }) => selectedCardsReducer.selectedCard
  );

  const roundCounter = useSelector(
    ({ counterReducer }) => counterReducer.counter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const shuffleCardArray = shuffle(cardArray);
    dispatch(resetCardsArray(shuffleCardArray));
  }, []);

  // Output of game's end
  useEffect(() => {
    if (roundCounter === 8) {
      setTimeout(() => {
        dispatch(endGame());
      }, 1500);
    }
  }, [roundCounter]);

  // Checking cards for equality
  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      firstCard.key === secondCard.key
        ? completedCards()
        : resetSelectedCards();
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
      dispatch(setCardsArray(newCardArray));
    }, 1000);
  };

  // If the cards are equal
  const completedCards = () => {
    const [firstCard, secondCard] = selectedCards;
    if (firstCard.id === secondCard.id) {
      return;
    }
    changeCard("completed");
    dispatch(addCounter());
  };

  // If the cards are not equal
  const resetSelectedCards = () => {
    changeCard("hide");
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
    dispatch(setCardsArray(idCard));
  }, []);

  const cards = cardArray.map(({ id, key, hide, completed, img }) => {
    return (
      <Card
        key={id}
        keyValue={key}
        clickHandler={clickHandler}
        id={id}
        hide={hide}
        completed={completed}
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
