import React from 'react'
import InputBox from '../InputBox'

const EngineerView = props => {
  return (
    <div className="View">
      <h1>Development Metrics</h1>
      <InputBox
        id="Engineers"
        value={props.engineers}
        setValue={props.setEngineers}
        name="Engineers"
        className="EngineersBox SelectedBox"
        inputType="range"
        maxInput="30"
        minInput="1"
        text="The size of your engineering team is a good scale of the complexity of software. More people writing code means more bugs being generated."
      />
      <InputBox
        id="LinesOfCode"
        value={props.linesOfCode}
        setValue={props.setLinesOfCode}
        name="Lines of Code"
        className="EngineersBox"
        inputType="range"
        maxInput="1000"
        minInput="50"
        step="50"
        text="How many lines of code your developers are producsing per month"
      />
      <InputBox
        id="Duration"
        value={props.duration}
        setValue={props.setDuration}
        name="Project Duration"
        className="EngineersBox"
        inputType="range"
        maxInput="24"
        minInput="1"
        text="Duration of project coding in months"
      />
    </div>
  )
}

export default EngineerView
