import React from 'react';
import style from './TodoList.css';

const TodoList = props => (
	<ul>
		{props.data.map((item, index) =>
			<li key={index}>
				{item.text}
				<button value={index} onClick={() => props.remove(item.id)}>x</button>
			</li>
		)}
	</ul>
);

export default TodoList;