import React from 'react'
import classes from './TodoControl.module.css'

const TodoControl = props => {
	return (
		<div className={classes.TodoControl}>
			<p className={classes.completed}>Выполнено: {props.completed} из {props.length}</p>
			<p className={classes.left}>Осталось сделать: {props.length - props.completed}</p>
		</div>
	)
}

export default TodoControl;