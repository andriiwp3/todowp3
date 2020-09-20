import React from "react";
import classes from "./TodoAdd.module.css";
import { ReactComponent as Plus } from "../../plus.svg";
import Button from "../UI/Button/Button";

const TodoAdd = (props) => {
   return (
      <div className={classes.TodoAdd}>
         <Button
            type={"add"}
            text={<Plus />}
            onClick={props.onAddButtonClick}
         />
         <input
            type="text"
            placeholder={"What needs to be done?"}
            value={props.addInputText}
            onChange={props.onInputChange}
            onKeyDown={props.onAddButtonClick}
            autoFocus
         />
      </div>
   );
};

export default TodoAdd;
