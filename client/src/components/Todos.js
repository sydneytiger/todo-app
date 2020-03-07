import React from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos({todos, onChange, onDelete}) {
  return (
    <React.Fragment>
      {todos.map(todo => <TodoItem 
        todo={todo} 
        key={todo.id} 
        onChange={onChange} 
        onDelete={onDelete}/>)}
    </React.Fragment>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Todos;
