import React from 'react';
import '../App.css';

class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '1-5'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You have selected: ' + this.state.value)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Estimated hours to fix? <br/>
            <select value ={this.state.value} onChange={this.handleChange}>
              <option value="1-5">1 - 5 Hours</option>
              <option value="6-10">6 - 10 Hours</option>
              <option value="11-15">11 - 15 Hours</option>
              <option value="15+">More than 15 Hours</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
      )
    }
  }

export default InputForm;
