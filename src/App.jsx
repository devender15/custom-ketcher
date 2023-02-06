import React from 'react'
import './App.css'

import structures from './constants/Structures'

import Render from './components/Render'

function App() {

  return (
    <div className="App">
      <Render structures={structures} />
    </div>
  )
}

export default App
