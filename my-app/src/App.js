import React, { useState } from 'react'
import './App.css'
import Page from './components/Page'

function App() {
  const [engineers, setEngineers] = useState(10)
  const [linesOfCode, setLinesOfCode] = useState(450)
  const [duration, setDuration] = useState(6)
  const [defects, setDefects] = useState(20)

  const [devTesting, setDevTesting] = useState(true)
  const [dedicatedQA, setDedicatedQA] = useState(false)
  const [automatedQA, setAutomatedQA] = useState(false)

  return (
    <div className="App">
      <Page
        // to EngineersView
        engineers={engineers}
        setEngineers={setEngineers}
        linesOfCode={linesOfCode}
        setLinesOfCode={setLinesOfCode}
        duration={duration}
        setDuration={setDuration}
        defects={defects}
        setDefects={setDefects}
        // to QAView
        dedicatedQA={dedicatedQA}
        setDedicatedQA={setDedicatedQA}
        devTesting={devTesting}
        setDevTesting={setDevTesting}
        automatedQA={automatedQA}
        setAutomatedQA={setAutomatedQA}
      />
    </div>
  )
}

export default App
