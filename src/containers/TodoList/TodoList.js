import React from 'react'
import TodoControl from '../../components/TodoControl/TodoControl'
import classes from './TodoList.module.css'
import TodoItem from '../../components/TodoItem/TodoItem'
import TodoAdd from '../../components/TodoAdd/TodoAdd'

const TodoList = props => {
	return (
		<div className={classes.TodoList}>
			<TodoControl
				completed={props.completedTodos}
				length={props.todoItems.length}
			/>

			<TodoAdd addInputText={props.addInputText} onAddButtonClick={props.onAddButtonClick} onInputChange={props.onAddInputChange} />

			{props.todoItems.map((todoItem, index) => {
				return (
					<TodoItem 
						key={index}
						text={todoItem.text}
						completed={todoItem.completed}
						onTodoChangeHandler={props.onTodoChangeHandler.bind(this, index)}
						edit={todoItem.edited}
						onDoubleClickHandler={props.onDoubleClickHandler.bind(this, index)}
						onChangeInput={props.onChangeInput.bind(this, index)}
						onBlurInput={props.onBlurInput.bind(this, index)}
						onDeleteButtonClick={props.onDeleteButtonClick.bind(this, index)}
					/>
				)
			 })}
		</div>
	)
}

export default TodoList