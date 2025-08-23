import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs.jsx';
import React from 'react';
import Programmes from './Components/Programmes.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programes" element={<Programmes />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
