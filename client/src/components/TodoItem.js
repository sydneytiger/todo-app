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

  onItemDelete = () => {
    this.setState({ showLoader: true });
    this.props.onDelete(this.props.todo.id, () => { 
      this.setState({ showLoader: false 
    })});
  }

  render() {
    const {todo} = this.props;

    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="card my-2">
            <div className={`card-body todoItem ${todo.completed ? 'completed': ''}`}>
              <input 
              type="checkbox" 
              value={todo.title} 
              checked={todo.completed} 
              onChange={this.onItemChanged}
              id={todo.id}/>
              <label 
                className="checkboxtext" 
                htmlFor={todo.id}>
                {todo.title}
              </label>
              <Loader loading={this.state.showLoader}></Loader>
              <button type="button" className="close" aria-label="Close" onClick={this.onItemDelete}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
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
