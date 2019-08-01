import React from 'react'
import EngineerView from './views/EngineerView'
import QAView from './views/QAView'
import ResultView from './views/ResultView'
import HeadingView from './views/HeadingView'
const Page = props => {
  return (
    <div className="Page">
      <HeadingView />
      <div className="Metrics">
        <EngineerView
          engineers={props.engineers}
          setEngineers={props.setEngineers}
          linesOfCode={props.linesOfCode}
          setLinesOfCode={props.setLinesOfCode}
          duration={props.duration}
          setDuration={props.setDuration}
          defects={props.defects}
          setDefects={props.setDefects}
        />
        <QAView
          dedicatedQA={props.dedicatedQA}
          setDedicatedQA={props.setDedicatedQA}
          devTesting={props.devTesting}
          setDevTesting={props.setDevTesting}
          automatedQA={props.automatedQA}
          setAutomatedQA={props.setAutomatedQA}
        />
        <ResultView
          engineers={props.engineers}
          duration={props.duration}
          dedicatedQA={props.dedicatedQA}
          devTesting={props.devTesting}
          automatedQA={props.automatedQA}
          linesOfCode={props.linesOfCode}
          defects={props.defects}
        />
      </div>
    </div>
  )
}

export default Page
