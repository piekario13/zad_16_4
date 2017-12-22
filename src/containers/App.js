import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import style from './App.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ['Zadanie 1','Zadanie 2']
    };
  }
  addTodo(val){
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: reminder});
  }
  render() {
    return <div className={style.TodoApp}>
          <Title todoData={this.state.data} todoName="To-Do App"/>
           </div>
  }
}

export default App;