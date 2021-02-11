import React, { useCallback, useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  newGame,
  clearCounter,
  resetCardArray,
} from "../../store/actions/actions";

// Assets
import classes from "./EndGame.module.css";

const EndGame = () => {
  // Array with cards
  const cardArray = useSelector(({ cardsReducer }) => cardsReducer.cards);

  const gameOver = useSelector(
    ({ gameOverReducer }) => gameOverReducer.gameOver
  );

  const dispatch = useDispatch();

  // Restart game
  useEffect(() => {
    if (gameOver) {
      const newCardArray = cardArray.map((card) => {
        card.complited = !card.complited;
        card.hide = !card.hide;
        return card;
      });
      dispatch(resetCardArray(newCardArray));
    }
  }, [gameOver]);

  const clickHandler = useCallback(() => {
    dispatch(clearCounter());
    dispatch(newGame());
  }, []);

  return (
    <div className={classes.endGame}>
      <h2 className={classes.title}>Вы выиграли !</h2>
      <button onClick={clickHandler} className={classes.btn}>
        Начать заново
      </button>
    </div>
  );
};

export default EndGame;
