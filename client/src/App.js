import React from 'react';
import { connect } from 'react-redux';
import { loadTodoItems } from './actions/todoAction';

import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Loader from './components/Loader'

import './css/App.css';

export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loading: false
    }
  }
  
  componentDidMount() {
    this.setState({ loading: true });
    this.props.initLoad(this.hideLoading.bind(this));
  }

  hideLoading = () => {
    this.setState({ loading: false });
  } 

  render() {
    const {todos} = this.props;
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
            loading={this.state.loading} 
            fullscreen />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLoad: cb => dispatch(loadTodoItems(cb))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

