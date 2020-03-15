import React from 'react';
import { connect } from 'react-redux';
import { loadTodoItems } from './actions/todoAction';

import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Loader from './components/Loader'
import { todoApi } from './startup';

import './css/App.css';

export class App extends React.Component {
  componentDidMount() {
    this.props.initLoad();
  }

  render() {
    const {todos, loading} = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary>
          <Header taskCount={todos.length} />
        </ErrorBoundary>
        <div className="container">
        <ErrorBoundary>
          <AddTodo AddTodo={this.AddTodo} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Todos 
            todos={todos} 
            onChange={this.onChange} 
            onDelete={this.onDelete}/>
          </ErrorBoundary>
        </div>
        <Loader 
            loading={loading} 
            fullscreen />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLoad: () => dispatch(loadTodoItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

