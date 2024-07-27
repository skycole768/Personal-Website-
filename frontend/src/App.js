import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Resume from './components/Resume'

const App = () => {
  

  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
