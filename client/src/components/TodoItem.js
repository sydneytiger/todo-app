import React from 'react'
import PropTypes from 'prop-types';

function TodoItem({todo, onChange, onDelete}) {

  return (
    <div className={`todoItem ${todo.completed ? 'completed': ''}`}>
      <input type="checkbox" value={todo.title} checked={todo.completed} onChange={onChange.bind(this, todo.id)}/>
      {todo.title}
      <button className="btnDel" onClick={onDelete.bind(this, todo.id)}>X</button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoItem;
