import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

import { updateInputTitle } from '../actions/addTodoAction';
import { addTodoItem } from '../actions/todoAction';

class AddTodo extends React.Component {
  handleChange = e => {
    this.props.updateTitle(e.target.value);
  }

  onSubmit = e => {
    if(this.props.inputedTitle.trim()){
      this.props.addTodo(this.props.inputedTitle.trim());
    }
  }

  render() { 
    const {showLoader, inputedTitle} = this.props;
    return ( 
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="card my-3 addTodo">
          <Loader loading={showLoader}></Loader>
          <div className="card-body">
            <div className="input-group input-group-lg">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Add todo..." 
                aria-label="Add todo item" 
                aria-describedby="btnAddTodoItem"
                value={inputedTitle} 
                onChange={this.handleChange}/>
              <div className="input-group-append">
                <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="btnAddTodoItem"
                onClick={this.onSubmit}>
                  Add
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputedTitle: state.addTodo.inputedTitle,
    showLoader: state.addTodo.showLoader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: title => dispatch(addTodoItem(title)),
    updateTitle: title => dispatch(updateInputTitle(title))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);