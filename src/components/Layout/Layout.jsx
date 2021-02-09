import React from "react";

// Redux
import { useSelector } from "react-redux";
import EndGame from "../EndGame";

// Components
import Field from "../Field";

// Assets
import classes from "./Layout.module.css";

const Layout = () => {
  const gameOver = useSelector(
    ({ gameOverReducer }) => gameOverReducer.gameOver
  );

  return (
    <div className={classes.wrapper}>{gameOver ? <EndGame /> : <Field />}</div>
  );
};

export default Layout;
