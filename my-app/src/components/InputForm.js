import React from 'react';
import '../App.css';

class InputForm extends React.Component {
    state = {
      calculatedTotal: 0,
      engineers: 5,
      salary: 55,
      qa: 3
    }

    handleEngineers = (event) => {
      this.setState({engineers: event.target.value})
    }

    handleSalary = (event) => {
      this.setState({salary: event.target.value})
    }
  
    handleQa = (event) => {
      this.setState({qa: event.target.value})
    }

    handleReset = () => {
      console.log('Data(state) has been reset')
      this.setState({
        calculatedTotal: 0,
        engineers: 5,
        salary: 55,
        qa: 3
      })
    }

    handleSubmit = (event) => {
      console.log('You have selected: ' + this.state.engineers + ' engineers')
      let qaPerDev = this.state.engineers / this.state.qa
      this.setState({
        calculatedTotal:  this.state.engineers * (qaPerDev * ((this.state.salary * this.state.engineers) / 12))
      })
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <label>
            Size of engineering team:
            <select className="inputField" value={this.state.engineers} onChange={this.handleEngineers}>
              <option value="5">1 - 5 Engineers</option>
              <option value="10">6 - 10 Engineers</option>
              <option value="15">11 - 15 Engineers</option>
              <option value="20">More than 15 Engineers</option>
            </select>
          </label><br/>
          <label>
            Size of QA team:
            <select className="inputField" value={this.state.qa} onChange={this.handleQa}>
              <option value="3">1 - 3 QA</option>
              <option value="6">4 - 6 QA</option>
              <option value="10">7 - 10 QA</option>
              <option value="15">More than 10 QA</option>
            </select>
          </label><br/>
          <label>
            Average salary of QA Engineer (in $1000s):
            <input  className="inputField" type="number" value={this.state.salary} min="45" max="100" step="5" onChange={this.handleSalary}/>
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
