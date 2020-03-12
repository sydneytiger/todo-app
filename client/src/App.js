import React from 'react';
import { v4 as uuidv4} from 'uuid';

import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Loader from './components/Loader'
import { todoApi } from './startup';

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
    .then(resp => {this.toggleComplete(todo, cb)},
    err => {this.toggleComplete(todo, cb)});
  }

  toggleComplete = (todo, cb) => {
    this.setState({ todos: [...this.state.todos.map(m => {
      if(m.id === todo.id) {
        m.completed = !m.completed;
      }
      return m;
    })]});
    cb();
  }

  onDelete = (id, cb) => {
    todoApi.delete(`/todos/${id}`)
    .then(resp => {
      this.removeTodo(id, cb);
    }, err => {
      this.removeTodo(id, cb);
    });
  }

  removeTodo = (id, cb) => {
    this.setState({todos: [...this.state.todos.filter(f => f.id !== id)]});
    cb();
  }

  AddTodo = (title, cb) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed:false
    }

    todoApi.post('/todos', newTodo)
    .then(resp => {
      this.setState({ todos: [resp.data, ...this.state.todos] });
      cb();
    });
  }

  render() {
    return (
      <React.Fragment>
        <ErrorBoundary>
          <Header taskCount={this.state.todos.length} />
        </ErrorBoundary>
        <div className="container">
        <ErrorBoundary>
          <AddTodo AddTodo={this.AddTodo} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Todos 
            todos={this.state.todos} 
            onChange={this.onChange} 
            onDelete={this.onDelete}/>
          </ErrorBoundary>
        </div>
        <Loader 
            loading={this.state.loading} 
            fullscreen />
      </React.Fragment>
    )
  }
}

export default App

