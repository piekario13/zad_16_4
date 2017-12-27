import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoForm from '../components/TodoForm.js';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.title = "To-Do App"
        this.state = {
            todo: '',
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
        this.addTodo = this.addTodo.bind(this);
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
            <div className={style.TodoContainer}>
                <div className={style.TodoApp}>
                    <Title title={this.title} added={this.state.data.length} />
                    <TodoForm addTodo={this.addTodo} />
                    <TodoList data={this.state.data} remove={this.removeTodo} />
                </div>
            </div>
        );
    }
}

export default App;