import React from "react";
import Button from "../UI/Button/Button"
import classes from "./TodoItem.module.css"
import { ReactComponent as Trash} from '../../trash.svg'

const TodoItem = (props) => {
   const titleClasses = [
      classes.title,
      props.completed ? classes.titleCompleted : null,
   ].join(" ");

   return (
      <div
         onDoubleClick={props.onDoubleClickHandler}
         className={classes.TodoItem}
      >
         <div className={classes.checkbox}>
            <input
               type="checkbox"
               checked={props.completed}
               onChange={props.onTodoChangeHandler}
            />
            <span className={classes.checkmark}></span>
         </div>
         {props.edit ? (
            <p className={titleClasses}>
               <input
                  type="text"
                  value={props.text}
                  onChange={props.onChangeInput}
                  onBlur={props.onBlurInput}
                  onKeyDown={props.onBlurInput}
                  autoFocus
               />
            </p>
         ) : (
            <p className={titleClasses}>
               <span>{props.text.trim()}</span>
            </p>
         )}
         <div className={classes.actions}>
				<Button type={'delete'} text={<Trash />} onClick={props.onDeleteButtonClick} />
         </div>
      </div>
   );
};

export default TodoItem;
