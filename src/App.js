import React from 'react'
import Header from './Header'
import RoutesApp from './routes'
import { BrowserRouter } from 'react-router-dom'

import './style.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <RoutesApp />
      </div>
    </BrowserRouter>
  )
}

export default App
