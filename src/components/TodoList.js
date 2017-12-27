import React from 'react';
import Todo from './Todo';
import style from '../containers/App.css';

const TodoList = props => (
	<ul className={style.TodoList}>
		{props.data.map((item, index) =>
			<Todo key={index} item={item} onClick={props.remove} />
		)}
	</ul>
);

export default TodoList;