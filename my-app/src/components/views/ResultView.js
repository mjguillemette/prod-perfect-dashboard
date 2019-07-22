import React from 'react'
import Graph from '../Graph'

const ResultView = () => {
  return (
    <div
      className="View"
      style={{
        minHeight: '400px',
        minWidth: '400px'
      }}
    >
      <h1>Testing</h1>
      <Graph />
      <h1>#Output</h1>
    </div>
  )
}

export default ResultView
