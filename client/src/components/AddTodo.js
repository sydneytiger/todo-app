import React from 'react';
import PropType from 'prop-types';

class AddTodo extends React.Component {
  state = { inputValue: '' }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.inputValue.trim()){
      this.props.AddTodo(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }
  
  render() { 
    return (  
      <form onSubmit={this.onSubmit} className="addTodo">
        <input 
          type="text" 
          placeholder="Add todo..." 
          value={this.state.inputValue} 
          onChange={this.handleChange}
          className='textBox'
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