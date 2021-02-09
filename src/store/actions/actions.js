// Constants
export const SET_CARD_ARRAY = "SET_CARD_ARRAY";
export const ADD_CARD = "ADD_CARD";
export const CLEAR = "CLEAR";
export const ADD_COUNTER = "ADD_COUNTER";
export const COMPLITED = "COMPLITED";
export const UN_COMPLITED = "UN_COMPLITED";
export const GAME_OVER = "GAME_OVER";
export const NEW_GAME = "NEW_GAME";
export const CLEAR_COUNTER = "CLEAR_COUNTER";
export const RESET_CARD_ARRAY = "RESET_CARD_ARRAY";

export const setCardArray = (payload) => ({
  type: SET_CARD_ARRAY,
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

export const complited = () => ({
  type: COMPLITED,
});

export const unComplited = () => ({
  type: UN_COMPLITED,
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

export const resetCardArray = (payload) => ({
  type: RESET_CARD_ARRAY,
  payload,
});
