import React from 'react';
import PropType from 'prop-types';
import Loader from './Loader';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputValue: '',
      showLoader: false
    }
  }


  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  onSubmit = e => {
    if(this.state.inputValue.trim()){
      this.setState({ showLoader: true });
      this.props.AddTodo(this.state.inputValue, () => { 
        this.setState({ 
          showLoader: false,
          inputValue: ''
      })});
    }
  }  
  render() { 
    return ( 
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="card my-3 addTodo">
          <Loader loading={this.state.showLoader}></Loader>
          <div className="card-body">
            <div className="input-group input-group-lg">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Add todo..." 
                aria-label="Add todo item" 
                aria-describedby="btnAddTodoItem"
                value={this.state.inputValue} 
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

AddTodo.propTypes = {
  AddTodo: PropType.func.isRequired
}
 
export default AddTodo;