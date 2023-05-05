import { useState } from 'react'
import React from 'react'


import './App.css'
import Main from './assets/main'
import Navbar from './assets/nav'
function App() {

  return (
    <React.StrictMode>
    <div className="App">
    <Navbar />
   <Main />
   
    </div>
    </React.StrictMode>
    
  )
}

export default App
