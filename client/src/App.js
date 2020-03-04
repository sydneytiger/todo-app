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

  render() {
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App

