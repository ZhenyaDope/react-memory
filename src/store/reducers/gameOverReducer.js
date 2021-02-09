// Constants
import { GAME_OVER, NEW_GAME } from "../actions/actions";

const initialState = {
  gameOver: false,
};

const gameOverReducer = (state = initialState, action) => {
  const { gameOver } = state;
  const { type } = action;

  switch (type) {
    case GAME_OVER:
      return { ...state, gameOver: true };
    case NEW_GAME:
      return { ...state, gameOver: false };
    default:
      return state;
  }
};

export default gameOverReducer;
