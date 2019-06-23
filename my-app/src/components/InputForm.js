import React from 'react';
import '../App.css';

class InputForm extends React.Component {
    state = {
      calculatedTotal: 0,
      engineers: 10,
      hourly: 25
    }

    handleEngineers = (event) => {
      this.setState({engineers: event.target.value})
    }

    handleHourly = (event) => {
        this.setState({hourly: event.target.value})
    }
  
    handleReset = (event) => {
      console.log('Data(state) has been reset')
      this.setState({
        calculatedTotal: 0,
        engineers: 10,
        hourly: 25
      })
    }

    handleSubmit = (event) => {
      console.log('You have selected: ' + this.state.value)
      this.setState({calculatedTotal: Math.pow(this.state.engineers, 2) * this.state.hourly})
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
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
          <input className="resetButton" type="reset" value="Reset" />
        </form>
        <h2>Cost of bugs/month: ${this.state.calculatedTotal.toFixed(2)}</h2>
        </div>
        
      )
    }
  }

export default InputForm;
