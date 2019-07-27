import React from 'react'
import InputBox from '../InputBox'

const QAView = props => {
  return (
    <div className="View">
      <h1> QA Metrics</h1>
      <InputBox
        name="Dedicated QA Team"
        value={props.dedicatedQA}
        setValue={props.setDedicatedQA}
        className="QABox"
        inputType="checkbox"
        text="The number of QA engineers allows for greater test coverage, increasing the chance a bug will be caught in testing."
      />
      <InputBox
        name="Developer Testing"
        value={props.devTesting}
        setValue={props.setDevTesting}
        className="QABox"
        inputType="checkbox"
        text="One trend in software development is to move toward developer-based testing over a dedicated QA team. Variables such as project scope and complexity can affect this decision."
      />
      <InputBox
        name="Automated QA"
        value={props.automatedQA}
        setValue={props.setAutomatedQA}
        className="QABox"
        inputType="checkbox"
        text="Test automation is the use of external software to test, and to monitor test coverage. Automated QA can perform tests that are difficult to implement manually."
      />
    </div>
  )
}

export default QAView
