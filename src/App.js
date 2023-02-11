
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/controls/Navbar';
import Home from './components/views/Home';
import Contact from './components/views/Contact';
import Services from './components/views/Services';
import Footer from './components/controls/Footer';
import IOAMS from './components/views/IOAMS';
import Mainframe from './components/views/Mainframe';
import WebDesign from './components/views/WebDesign';
import AppDev from './components/views/AppDev';
import DM from './components/views/DigitalMarketing';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'                   element={<Home />} />
          <Route exact path='/home'               element={<Home />} />
          <Route exact path='/services'           element={<Services />} />
          <Route exact path='/contact-us'         element={<Contact />} />
          <Route exact path='/ioams'              element={<IOAMS />} />
          <Route exact path='/mainframe'          element={<Mainframe />} />
          <Route exact path='/app-dev'            element={<WebDesign />} />
          <Route exact path='/web-design'         element={<AppDev />} />
          <Route exact path='/digital-marketing'  element={<DM />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
