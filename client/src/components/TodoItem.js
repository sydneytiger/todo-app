import React from 'react'
import { connect } from 'react-redux';
import Loader from './Loader';

import {deleteTodoItem, updateTodoItem} from '../actions/todoAction';

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       showLoader: false
    }
  }

  shouldComponentUpdate(nextProps, nextSate) {
    console.log(nextProps);
    console.log(this.props);
    return true;
  }

  onItemChanged = () => {
    this.setState({ showLoader: true });
    this.props.update(this.props.todo, this.hideLoader.bind(this));
  };

  hideLoader = () => {
    this.setState({ showLoader: false });
  }

  onItemDelete = () => {
    this.setState({ showLoader: true });
    this.props.delete(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="card my-2">
          <Loader loading={this.state.showLoader}></Loader>
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

const mapStateToProps = state => {
  return {
    
  }
};

const mapDispatchToProps = dispatch => {
  return {
    update: (todo, cb) => dispatch(updateTodoItem(todo, cb)),
    delete: id => dispatch(deleteTodoItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
