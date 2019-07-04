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
      let calculatedTotal = engineers * (qaPerDev * (((salary * 8) * (engineers/3.22)) / 12)) + (salary * qa * 100 / 12)
      let formatTotal = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0, style: 'currency', currency: 'USD' }).format(calculatedTotal)

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
              <p
                style={{
                  margin: '1.5em 0 0 0',
                  lineHeight: '.5em',
                  fontSize: '1.2rem'
                }}
              >
            Cost of bugs/month:
            </p>
            <h1 
              style={{
                margin: 'auto',
                lineHeight: '1.5em'
              }}
            >
              {formatTotal}
            </h1>
              <input className="resetButton" type="reset" value="Reset" />
            </form>
        </div>
        
      )
    }
  }

export default InputForm;
