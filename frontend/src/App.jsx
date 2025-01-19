import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import Weather from './Weather'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    localStorage.setItem("temp", null);
    localStorage.setItem("feels", null);
    localStorage.setItem("code", null);
    localStorage.setItem("humid", null);
    localStorage.setItem("timezone", null);
    localStorage.setItem("wind_dir", null);
    localStorage.setItem("wind_spd", null);
    localStorage.setItem("location", null);
    localStorage.setItem("weather", null);

  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather/data" element={<Weather />} />
      </Routes>
    </Router>
  )
}

export default App
