import React from 'react'
import Graph from '../Graph'

const ResultView = props => {
  const loc = props.engineers * props.linesOfCode * props.duration
  const rateOfBugs = props.defects / 1000
  const totalBugs = loc * rateOfBugs
  const initialCostOfBug = 40

  const percent4X = props.devTesting ? 0.3 : 0.26
  const percent10X = props.devTesting ? 0.34 : 0.3
  const percent40X = props.devTesting ? 0.31 : 0.38
  const percent100X = props.devTesting ? 0.05 : 0.06

  const dollarsAt4X = totalBugs * percent4X * initialCostOfBug * 4
  const dollarsAt10X = totalBugs * percent10X * initialCostOfBug * 10
  const dollarsAt40X = totalBugs * percent40X * initialCostOfBug * 40
  const dollarsAt100X = totalBugs * percent100X * initialCostOfBug * 100

  const totalCost = dollarsAt4X + dollarsAt10X + dollarsAt40X + dollarsAt100X
  const formatTotal = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'USD'
  }).format(totalCost)

  return (
    <div
      className="View"
      style={{
        minHeight: '400px',
        minWidth: '300px',
        fontSize: '1.4rem'
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
      Total Bugs (20 Bugs / 1k LoC): {totalBugs.toFixed(0)} <br />
      Found at 4X: {(percent4X * totalBugs).toFixed(0)} -- $
      {dollarsAt4X.toFixed(0)}
      <br />
      Found at 10X: {(percent10X * totalBugs).toFixed(0)} -- $
      {dollarsAt10X.toFixed(0)}
      <br />
      Found at 40X: {(percent40X * totalBugs).toFixed(0)} -- $
      {dollarsAt40X.toFixed(0)}
      <br />
      Found at 100X: {(percent100X * totalBugs).toFixed(0)} -- $
      {dollarsAt100X.toFixed(0)} <br />
      <h2>Total Cost: {formatTotal}</h2>
    </div>
  )
}

export default ResultView
