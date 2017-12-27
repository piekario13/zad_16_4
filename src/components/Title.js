import React from 'react';
import style from '../containers/App.css';

const Title = props => (
	<div className={style.Title}>
		<h1>{props.title}</h1>
		<p>Task number: {props.added}</p>
	</div>
);

export default Title;