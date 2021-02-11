// Constants
import { SET_CARDS_ARRAY, RESET_CARDS_ARRAY } from "../actions/actions";

// Иконки карточек
import vue from "../../assets/img/cards/vue.png";
import css from "../../assets/img/cards/css.png";
import js from "../../assets/img/cards/js.png";
import react from "../../assets/img/cards/react.png";
import redux from "../../assets/img/cards/redux.png";
import github from "../../assets/img/cards/github.png";
import html from "../../assets/img/cards/html.png";
import node from "../../assets/img/cards/node.png";

const intialState = {
  cards: [
    { key: "vue", id: 1, hide: true, completed: false, img: vue },
    { key: "css", id: 2, hide: true, completed: false, img: css },
    { key: "html", id: 3, hide: true, completed: false, img: html },
    { key: "js", id: 4, hide: true, completed: false, img: js },
    { key: "react", id: 5, hide: true, completed: false, img: react },
    { key: "redux", id: 6, hide: true, completed: false, img: redux },
    { key: "github", id: 7, hide: true, completed: false, img: github },
    { key: "node", id: 8, hide: true, completed: false, img: node },
    { key: "vue", id: 9, hide: true, completed: false, img: vue },
    { key: "css", id: 10, hide: true, completed: false, img: css },
    { key: "html", id: 11, hide: true, completed: false, img: html },
    { key: "js", id: 12, hide: true, completed: false, img: js },
    { key: "react", id: 13, hide: true, completed: false, img: react },
    { key: "redux", id: 14, hide: true, completed: false, img: redux },
    { key: "github", id: 15, hide: true, completed: false, img: github },
    { key: "node", id: 16, hide: true, completed: false, img: node },
  ],
};

const cardsReducer = (state = intialState, action) => {
  const { cards } = state;
  const { type, payload } = action;

  switch (type) {
    case SET_CARDS_ARRAY:
      return {
        ...state,

        cards: cards.map((card) => {
          if (card.id === payload) {
            card.hide = !card.hide;
          }
          return card;
        }),
      };
    case RESET_CARDS_ARRAY:
      return { ...state, cards: payload };

    default:
      return state;
  }
};
export default cardsReducer;
