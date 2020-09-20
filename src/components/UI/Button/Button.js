import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
   return <button className={classes[props.type]} onClick={props.onClick}>{props.text}</button>;
};

export default Button
