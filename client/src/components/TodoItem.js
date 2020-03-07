import React from 'react'
import PropTypes from 'prop-types';
import Loader from './Loader';

class TodoItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { showLoader: false }
  }

  onItemChanged = () => {

    this.setState({ showLoader: true });
    this.props.onChange(this.props.todo, () => { 
      this.setState({ showLoader: false 
    })});
  };

  render() {
    const {todo, onDelete} = this.props;

    return (
      <div className={`todoItem ${todo.completed ? 'completed': ''}`}>
        <input 
          type="checkbox" 
          value={todo.title} 
          checked={todo.completed} 
          onChange={this.onItemChanged}
          id={todo.id}
        />
        <label 
          className="checkboxtext" 
          htmlFor={todo.id}>
          {todo.title}
        </label>
        <Loader loading={this.state.showLoader}></Loader>
        <a href="#" className="btnDel" onClick={onDelete.bind(this, todo.id)} />
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoItem;
