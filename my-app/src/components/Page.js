import React from 'react'
import EngineerView from './views/EngineerView'
import QAView from './views/QAView'
import ResultView from './views/ResultView'

const Page = () => {
  return (
    <div className="Page">
      <div className="Metrics">
        <EngineerView />
        <QAView />
      </div>
      <ResultView />
    </div>
  )
}

export default Page
