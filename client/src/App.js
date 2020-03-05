import React from 'react';
import { v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import Todos from './components/Todos';

import './reset.css';
import './App.css';

export class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'learn react',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'learn GraphQl',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'learn mysql',
        completed: false
      }
    ]
  }

  onChange = id => {
    const newTodos = [...this.state.todos];
    newTodos.map(item => {
      if(item.id === id) item.completed = !item.completed;
    });
    this.setState({ todos: newTodos})
  }

  onDelete = id => {
    this.setState({todos: [...this.state.todos.filter(f => f.id !== id)]});
  }

  render() {
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos} onChange={this.onChange} onDelete={this.onDelete}/>
      </div>
    )
  }
}

export default App

