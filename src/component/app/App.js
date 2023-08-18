import React from 'react'
import { Route,  Routes } from 'react-router-dom';
import Spinners from "../spinnerslar/Spinners"


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Spinners />} />
      </Routes>
  )
}

export default App