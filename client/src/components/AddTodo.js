import React from 'react';
import PropType from 'prop-types';

class AddTodo extends React.Component {
  state = { inputValue: '' }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.inputValue);
    this.setState({ inputValue: '' });
  }
  
  render() { 
    return (  
      <form onSubmit={this.onSubmit} className="flexBox">
        <input 
          type="text" 
          placeholder="Add todo..." 
          value={this.state.inputValue} 
          onChange={this.handleChange}
          />
        <input className="btn" value="Submit" type="submit"></input>
      </form>
    );
  }
}

AddTodo.propTypes = {
  AddTodo: PropType.func.isRequired
}
 
export default AddTodo;