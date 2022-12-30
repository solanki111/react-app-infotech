
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/controls/Navbar';
import Home from './components/views/Home';
import Contact from './components/views/Contact';
import Services from './components/views/Services';
import Footer from './components/controls/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'           element={<Home />} />
          <Route exact path='/home'       element={<Home />} />
          <Route exact path='/services'   element={<Services />} />
          <Route exact path='/contact-us' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
