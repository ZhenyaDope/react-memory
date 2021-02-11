// Constants
export const SET_CARDS_ARRAY = "SET_CARDS_ARRAY";
export const ADD_CARD = "ADD_CARD";
export const CLEAR = "CLEAR";
export const ADD_COUNTER = "ADD_COUNTER";
export const GAME_OVER = "GAME_OVER";
export const NEW_GAME = "NEW_GAME";
export const CLEAR_COUNTER = "CLEAR_COUNTER";
export const RESET_CARDS_ARRAY = "RESET_CARDS_ARRAY";

export const setCardsArray = (payload) => ({
  type: SET_CARDS_ARRAY,
  payload,
});

export const addCard = (payload) => ({
  type: ADD_CARD,
  payload,
});

export const clear = () => ({
  type: CLEAR,
});

export const addCounter = () => ({
  type: ADD_COUNTER,
});

export const endGame = () => ({
  type: GAME_OVER,
});

export const newGame = () => ({
  type: NEW_GAME,
});

export const clearCounter = () => ({
  type: CLEAR_COUNTER,
});

export const resetCardsArray = (payload) => ({
  type: RESET_CARDS_ARRAY,
  payload,
});
