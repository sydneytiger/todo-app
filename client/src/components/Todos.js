import React from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos({todos, onChange, onDelete, loading}) {
  return (
    <div>
      {todos.map(todo => <TodoItem 
        todo={todo} 
        key={todo.id} 
        onChange={onChange} 
        onDelete={onDelete} 
        loading={loading}/>)}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default Todos;
