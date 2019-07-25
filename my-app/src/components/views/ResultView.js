import React from 'react'
import Graph from '../Graph'

const ResultView = props => {
  let loc = props.engineers * props.linesOfCode * props.duration

  return (
    <div
      className="View"
      style={{
        minHeight: '400px',
        minWidth: '300px'
      }}
    >
      <h1>Testing</h1>
      Engineers: {props.engineers} <br />
      Lines of Code (/month): {props.linesOfCode} <br />
      Duration: {props.duration} <br />
      Dedicated QA: {props.dedicatedQA ? 'true' : 'false'} <br />
      Developer Testing: {props.devTesting ? 'true' : 'false'} <br />
      Automated QA: {props.automatedQA ? 'true' : 'false'} <br />
      <Graph />
      <h1>#Output</h1>
      Total Lines of Code: {loc} <br />
      Total Bugs (20 Bugs / 1k LoC): {loc * 0.02}
    </div>
  )
}

export default ResultView
