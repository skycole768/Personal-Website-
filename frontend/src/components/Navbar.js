import React from 'react';
import '../styles/navbar.css';

function Navbar({projectsRef, aboutRef, contactRef,resumeRef, homeRef, activeSection}) {

  const handleScrollTo = (ref) => () => {
    ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };
  
    return (
      <div className="navbar">
        <button onClick={handleScrollTo(homeRef)} className={`NavLink ${activeSection === 'home' ? 'active' : ''}`} to='/'>Home</button>
        <button onClick={handleScrollTo(projectsRef)} className={`NavLink ${activeSection === 'projects' ? 'active' : ''}`} to='/Projects'>Projects</button>
        <button onClick={handleScrollTo(resumeRef)} className={`NavLink ${activeSection === 'resume' ? 'active' : ''}`} to='/Resume'>Resume</button>
        <button onClick={handleScrollTo(aboutRef)} className={`NavLink ${activeSection === 'about' ? 'active' : ''}`} to='/About'>About Me</button>
        <button onClick={handleScrollTo(contactRef)} className={`NavLink ${activeSection === 'contact' ? 'active' : ''}`} to='/Contact'>Contact</button>
      </div>
    );
  }
  
  export default Navbar;