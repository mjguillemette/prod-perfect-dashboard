import React from 'react';
import '../App.css';

class InputForm extends React.Component {
    state = {
        engineers: 10,
        calculatedTotal: 0,
        hourly: 25
    }

    handleEngineers = (event) => {
      this.setState({engineers: event.target.value});
    }

    handleHourly = (event) => {
        this.setState({hourly: event.target.value})
    }
  
    handleSubmit = (event) => {
      console.log(`You have selected: ${this.state.engineers}`)
      this.setState({calculatedTotal: Math.pow(this.state.engineers, 2) * this.state.hourly})
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Size of engineering team: <t/>
            <select value={this.state.engineers} onChange={this.handleEngineers}>
              <option value="5">1 - 5 Engineers</option>
              <option value="10">6 - 10 Engineers</option>
              <option value="15">11 - 15 Engineers</option>
              <option value="20">More than 15 Engineers</option>
            </select>
          </label><br/>
          <label>
            Average salary of QA Engineer: <t/>
            <input type="number" value={this.state.hourly} steps="5" onChange={this.handleHourly}/>
          </label>
          <br/>
          <input className="submitButton" type="submit" value="Submit" />
        </form>
        <h2>Cost of bugs/month: ${this.state.calculatedTotal.toFixed(2)}</h2>
        </div>
        
      )
    }
  }

export default InputForm;
