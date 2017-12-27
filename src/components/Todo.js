import React from 'react';
import style from '../containers/App.css';

const Todo = props => (
	<li className={style.TodoItem}>
		{props.item.text}
		<button className={style.RemoveButton} value={props.item.id} onClick={() => props.onClick(props.item.id)}>X</button>
	</li>
);

export default Todo; 