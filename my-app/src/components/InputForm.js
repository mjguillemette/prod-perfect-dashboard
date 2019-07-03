import React, { Component } from 'react';
import '../App.css';

class InputForm extends Component {
    state = {
      engineers: 10,
      salary: 75,
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
      event.preventDefault();
    }

    handleReset = () => {
      this.setState({
        engineers: 10,
        salary: 75,
        qa: 3
      })
    }
  
    render() {
      let { engineers, salary, qa } = this.state
      let formatSalary = new Intl.NumberFormat().format(salary * 1000)
      let qaPerDev = engineers / qa
      let calculatedTotal = engineers * (qaPerDev * (((salary * 8) * (engineers/3)) / 12))
      let formatTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(calculatedTotal)

      return (
          <div className="inputForm">
            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
              <div className="teamForm">
                <label>
                  { engineers } Developers <br/>
                  <input 
                    id="dev" 
                    type="range" 
                    max="30" 
                    className="slider" 
                    value={ engineers } 
                    onChange={this.handleChange}
                    onMouseUp={this.handleChange} 
                    onTouchMove={this.handleChange}
                    onTouchEnd={this.handleChange}
                  />
                </label><br/>
                <label>
                  { qa } QA Engineers <br />
                  <input 
                    id="qa" 
                    type="range" 
                    max="15" 
                    className="slider" 
                    value={ qa } 
                    onChange={this.handleChange} 
                    onMouseUp={this.handleChange} 
                    onTouchMove={this.handleChange}
                    onTouchEnd={this.handleChange}
                  />
                </label><br/>
                <label className="salary">
                  QA Average Salary ${formatSalary}
                  <input 
                    id="salary" 
                    type="range" 
                    min="50" 
                    max="150" 
                    step="5"
                    className="slider" 
                    value={ salary } 
                    onChange={this.handleChange} 
                    onMouseUp={this.handleChange} 
                    onTouchMove={this.handleChange}
                    onTouchEnd={this.handleChange}
                  />
                </label>
              </div>
              <input className="resetButton" type="reset" value="Reset" />
            </form>
            <h1 style={{
              // width: `500px`,
              fontSize: `calc(10px + 2vmin)`
            }}
            >
            Cost of bugs/month: {formatTotal}
            </h1>
        </div>
        
      )
    }
  }

export default InputForm;
