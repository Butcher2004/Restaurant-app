import Homepage from './Homepage';
import RestInfo from './RestInfo';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import React from 'react'

function Appx() {
  return (
    <Router >
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route exact path='/:id' Component={RestInfo} />
      </Routes>
    </Router>
  )
}

export default Appx