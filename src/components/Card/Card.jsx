import React, { memo } from "react";

// Assets
import classes from "./Card.module.css";

const Card = ({ id, keyValue, hide, complited, clickHandler, img }) => {
  console.log("card render");
  const hideClass = hide
    ? `${classes.card}`
    : `${classes.card} ${classes.flip}`;

  const complitedClass = complited
    ? `${hideClass} ${classes.complited}`
    : `${hideClass}`;

  return (
    <li
      onClick={clickHandler}
      data-id={id}
      data-value={keyValue}
      className={complitedClass}
    >
      <div className={classes.front}></div>
      <div className={classes.back}>
        <img className={classes.img} src={img} alt="" />
      </div>
    </li>
  );
};

export default memo(Card);
