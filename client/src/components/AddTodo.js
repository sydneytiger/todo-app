import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

import { addTodoItem } from '../actions/todoAction';

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inputValue: '',
       showLoader: false
    }
  }
  
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.inputValue.trim()){
      this.setState({ showLoader: true });
      this.props.addTodo(
        this.state.inputValue.trim(), 
        this.clearInput.bind(this), 
        this.hideLoader.bind(this));
    }
  }

  clearInput = () => {
    this.setState({ inputValue: '' });
  }

  hideLoader = () => {
    this.setState({ showLoader: false });
  }

  render() { 
    const {showLoader, inputValue} = this.state;
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
                value={inputValue} 
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

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (title, clearInputCb, hideLoaderCb) => 
      dispatch(addTodoItem(title, clearInputCb, hideLoaderCb))
  }
}
 
export default connect(null, mapDispatchToProps)(AddTodo);