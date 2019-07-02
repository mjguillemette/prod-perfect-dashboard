import React from 'react';
import '../App.css';

class InputForm extends React.Component {
    state = {
      calculatedTotal: 0,
      engineers: 5,
      salary: 55,
      qa: 3
    }

    handleChange = (event) => {
      switch(event.target.id){
        case 'dev':
          this.setState({engineers: event.target.value})
          break
        case 'qa':
          this.setState({qa: event.target.value})
          break
        case 'salary':
          this.setState({salary: event.target.value})
          break
        default:
          break
      }

      console.log(`Devs: ${this.state.engineers}, QA: ${this.state.qa}, Salary: ${this.state.salary}` )
      let qaPerDev = this.state.engineers / this.state.qa
      this.setState({
        calculatedTotal:  this.state.engineers * (qaPerDev * (((this.state.salary * 10) * (this.state.engineers/3)) / 12))
      })
      // event.preventDefault();
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
  
    render() {
      return (
          <div className="inputForm">
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="teamForm">
          <label>
            {this.state.engineers} Developers <br/>
            <input id="dev" type="range" max="30" className="slider" value={this.state.engineers} onChange={this.handleChange} />
          </label><br/>
          <label>
            {this.state.qa} QA Engineers <br />
            <input id="qa" type="range" max="15" className="slider" value={this.state.qa} onChange={this.handleChange} />
            {/* <select className="inputField" value={this.state.qa} onChange={this.handleQa}>
              <option value="3">1 - 3 QA</option>
              <option value="6">4 - 6 QA</option>
              <option value="10">7 - 10 QA</option>
              <option value="15">More than 10 QA</option>
            </select> */}
          </label><br/>
          <label>
            QA Average Salary: ${this.state.salary * 1000}
            <input id="salary" type="range" min="45" max="100" step="5"className="slider" value={this.state.salary} onChange={this.handleChange} />
            {/* <input  className="inputField" type="number" value={this.state.salary} min="45" max="100" step="5" onChange={this.handleSalary}/> */}
          </label>
          </div>
          {/* <input className="submitButton" type="submit" value="Submit" /> */}
          <input className="resetButton" type="reset" value="Reset" />
        </form>
        <h2>Cost of bugs/month: ${this.state.calculatedTotal.toFixed(2)}</h2>
        </div>
        
      )
    }
  }

export default InputForm;
