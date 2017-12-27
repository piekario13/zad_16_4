import React from 'react';
import style from '../containers/App.css';

const TodoForm = props => {
	let input;
	return(
		<form className={style.TodoForm} onSubmit={(e) => {
			e.preventDefault();
			props.addTodo(input.value);
			input.value = '';
		}}>
			<input className={style.TodoInput} ref={event => {
				input = event
			}}/>
			<button className={style.AddButton}>+</button>
		</form>
	)
};

export default TodoForm;