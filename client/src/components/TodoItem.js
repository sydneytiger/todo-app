import React from 'react'
import PropTypes from 'prop-types';

function TodoItem({todo, onChange, onDelete}) {

  return (
    <div className={`todoItem ${todo.completed ? 'completed': ''}`}>
      <input 
        type="checkbox" 
        value={todo.title} 
        checked={todo.completed} 
        onChange={onChange.bind(this, todo)}
        id={todo.id}
      />
      <label 
        className="checkboxtext" 
        htmlFor={todo.id}>
        {todo.title}
      </label>
      <a href="#" className="btnDel" onClick={onDelete.bind(this, todo.id)} />
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoItem;
