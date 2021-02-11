import React, { memo } from "react";

// Assets
import classes from "./Card.module.css";

const Card = ({ id, keyValue, hide, completed, clickHandler, img }) => {
  const hideClass = hide
    ? `${classes.card}`
    : `${classes.card} ${classes.flip}`;

  const completedClass = completed
    ? `${hideClass} ${classes.completed}`
    : `${hideClass}`;

  return (
    <li
      onClick={clickHandler}
      data-id={id}
      data-value={keyValue}
      className={completedClass}
    >
      <div className={classes.front}></div>
      <div className={classes.back}>
        <img className={classes.img} src={img} alt="" />
      </div>
    </li>
  );
};

export default memo(Card);
