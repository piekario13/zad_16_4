import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'Posprzątać dom'
                }, {
                id: 2,
                text: 'Ubrać choinkę'
                }, {
                id: 3,
                text: 'Ulepić pierogi'
            }]
        };
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(item => item.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="To-Do Application" added={this.state.data.length} />
                <TodoList data={this.state.data} remove={this.removeTodo}></TodoList>
            </div>
        );
    }
}

export default App;