import React from 'react';
import { v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Loader from './components/Loader'
import { todoApi } from './startup';

import './css/reset.css';
import './css/App.css';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      todos: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    todoApi.get('/todos')
    .then(resp => {
      this.setState({ todos: resp.data, loading: false });
    });
  }

  onChange = todo => {
    todo.completed = !todo.completed;

    this.setState({ loading: true });
    todoApi.put(`/todos/${todo.id}`, todo)
    .then(resp => {
      this.setState({ todos: [...this.state.todos], loading: false})
    });
  }

  onDelete = id => {
    this.setState({ loading: true });
    todoApi.delete(`/todos/${id}`)
    .then(resp => {
      this.setState({todos: [...this.state.todos.filter(f => f.id !== id)], loading: false});
    });
  }

  AddTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed:false
    }

    this.setState({ loading: true });
    todoApi.post('/todos', newTodo)
    .then(resp => {
      this.setState({ todos: [resp.data, ...this.state.todos], loading: false });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo 
          AddTodo={this.AddTodo} />
        <Todos 
          todos={this.state.todos} 
          onChange={this.onChange} 
          onDelete={this.onDelete}
          loading={this.state.loading}/>
        <Loader 
          loading={this.state.loading} 
          fullscreen />
      </div>
    )
  }
}

export default App

