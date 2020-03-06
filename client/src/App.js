import React from 'react';
import { v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { todoApi } from './startup';

import './reset.css';
import './App.css';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { todos: []};
  }

  componentDidMount() {
    todoApi.get('/todos')
    .then(resp => {
      this.setState({ todos: resp.data });
    });
  }

  onChange = todo => {
    todo.completed = !todo.completed;
    todoApi.put(`/todos/${todo.id}`, todo)
    .then(resp => {
      this.setState({ todos: [...this.state.todos]})
    });
  }

  onDelete = id => {
    todoApi.delete(`/todos/${id}`)
    .then(resp => {
      this.setState({todos: [...this.state.todos.filter(f => f.id !== id)]});
    });
  }

  AddTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed:false
    }

    todoApi.post('/todos', newTodo)
    .then(resp => {
      this.setState({ todos: [resp.data, ...this.state.todos] });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo AddTodo={this.AddTodo} />
        <Todos todos={this.state.todos} onChange={this.onChange} onDelete={this.onDelete}/>
      </div>
    )
  }
}

export default App

