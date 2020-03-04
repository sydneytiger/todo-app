import React from 'react'
import PropTypes from 'prop-types';

function TodoItem({todo}) {
  const onChange = id => { console.log(id)};
  const onDelete = id => { console.log(id) }

  return (
    <div className={`todoItem ${todo.completed ? 'completed': ''}`}>
      <input type="checkbox" value={todo.title} checked={todo.completed} onChange={onChange.bind(this, todo.id)}/>
      {todo.title}
      <button className="btnDel" onClick={onDelete.bind(this, todo.id)}>X</button>
    </div>
  )
}

TodoItem.prototype = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem;
