import React from 'react'
import EngineerView from './views/EngineerView'
import QAView from './views/QAView'
import ResultView from './views/ResultView'

const Page = props => {
  return (
    <div className="Page">
      <div className="Metrics">
        <EngineerView
          engineers={props.engineers}
          setEngineers={props.setEngineers}
          linesOfCode={props.linesOfCode}
          setLinesOfCode={props.setLinesOfCode}
          duration={props.duration}
          setDuration={props.setDuration}
        />
        <QAView
          dedicatedQA={props.dedicatedQA}
          setDedicatedQA={props.setDedicatedQA}
          devTesting={props.devTesting}
          setDevTesting={props.setDevTesting}
          automatedQA={props.automatedQA}
          setAutomatedQA={props.setAutomatedQA}
        />
      </div>
      <ResultView
        engineers={props.engineers}
        duration={props.duration}
        dedicatedQA={props.dedicatedQA}
        devTesting={props.devTesting}
        automatedQA={props.automatedQA}
        linesOfCode={props.linesOfCode}
      />
    </div>
  )
}

export default Page
