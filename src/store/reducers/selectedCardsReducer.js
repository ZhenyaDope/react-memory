// Constants
import { ADD_CARD, CLEAR } from "../actions/actions";

const initialState = {
  selectedCard: [],
};

const selectedCardsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { selectedCard } = state;

  switch (type) {
    case ADD_CARD: {
      return { ...state, selectedCard: [...selectedCard, payload] };
    }
    case CLEAR: {
      return { ...state, selectedCard: [] };
    }
    default:
      return state;
  }
};

export default selectedCardsReducer;
