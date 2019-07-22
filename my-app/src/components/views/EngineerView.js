import React from 'react'
import InputBox from '../InputBox'

const EngineerView = () => {
  return (
    <div className="View">
      <h1>Development Metrics</h1>
      <InputBox
        name="Engineers"
        className="EngineersBox SelectedBox"
        inputType="range"
        text="Some sample text The size of your engineering team is a good scale of the complexity of software. More people writing code means more bugs being generated."
      />
      <InputBox
        name="Lines of Code"
        className="EngineersBox"
        inputType="range"
        text="How many lines of code your developers are producsing per month"
      />
      <InputBox
        name="Project Duration"
        className="EngineersBox"
        inputType="range"
        text="Duration of project coding in months"
      />
    </div>
  )
}

export default EngineerView
