import React from 'react'
import Provider from './utils/Provider'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'


const App = () => {

  return (
    <Provider>
      <Router>
        <Navbar>
          <Routes/>
        </Navbar>
      </Router>
    </Provider>
  )
}

export default App
