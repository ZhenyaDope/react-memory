import { combineReducers } from "redux";

// Reducers
import cardsReducer from "./cardsReducer";
import selectedCardsReducer from "./selectedCardsReducer";
import counterReducer from "./counterReducer";
import gameOverReducer from "./gameOverReducer";

const rootReducer = combineReducers({
  cardsReducer,
  selectedCardsReducer,
  counterReducer,
  gameOverReducer,
});

export default rootReducer;
