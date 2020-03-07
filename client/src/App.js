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

  onChange = (todo, cb) => {
    const newTodo = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed
    }

    todoApi.put(`/todos/${todo.id}`, newTodo)
    .then(resp => {
      this.setState({ todos: [...this.state.todos.map(m => {
        if(m.id === todo.id) {
          m.completed = !m.completed;
        }
        return m;
      })]});
      cb();
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
        <AddTodo 
          AddTodo={this.AddTodo} />
        <Todos 
          todos={this.state.todos} 
          onChange={this.onChange} 
          onDelete={this.onDelete}/>
        <Loader 
          loading={this.state.loading} 
          fullscreen />
      </div>
    )
  }
}

export default App

