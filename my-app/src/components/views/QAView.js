import React, { useState } from 'react'
import InputBox from '../InputBox'

const QAView = props => {
  const [developerSelected, setDeveloperSelected] = useState(false)
  const [automatedSelected, setAutomatedSelected] = useState(false)

  return (
    <div className="View">
      <h2 className="ViewHeading">Quality Assurance Profile</h2>
      <InputBox
        name="Developer Testing"
        isSelected={developerSelected}
        setSelected={setDeveloperSelected}
        id="DevTesting"
        value={props.devTesting}
        setValue={props.setDevTesting}
        className="QABox"
        inputType="checkbox"
        text="One trend in software development is to move toward developer-based testing over a dedicated QA team. Variables such as project scope and complexity can affect this decision."
      />
      <InputBox
        name="Automated QA"
        isSelected={automatedSelected}
        setSelected={setAutomatedSelected}
        id="AutomatedQA"
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
