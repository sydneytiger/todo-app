import React from 'react'
import TodoItem from './TodoItem';
import { connect } from 'react-redux';


function Todos(props) {
  const {todos} = props;
  return (
    <React.Fragment>
      {todos.map(todo => <TodoItem 
        todo={todo} 
        key={todo.id}/>)}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos);
