// Constants
import { ADD_COUNTER, CLEAR_COUNTER } from "../actions/actions";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  const { counter } = state;
  const { type } = action;

  switch (type) {
    case ADD_COUNTER:
      return { ...state, counter: counter + 1 };
    case CLEAR_COUNTER:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default counterReducer;
