import React from 'react'
import InputBox from '../InputBox'

const QAView = () => {
  return (
    <div className="View">
      <h1> QA Metrics</h1>
      <InputBox
        name="Dedicated QA Team"
        className="QABox"
        inputType="checkbox"
        text="The number of QA engineers allows for greater test coverage, increasing the chance a bug will be caught in testing."
      />
      <InputBox
        name="Developer Testing"
        className="QABox"
        inputType="checkbox"
        text="One trend in software development is to move toward developer-based testing over a dedicated QA team. Variables such as project scope and complexity can affect this decision."
      />
      <InputBox name="Automated QA" className="QABox" inputType="checkbox" />
    </div>
  )
}

export default QAView
