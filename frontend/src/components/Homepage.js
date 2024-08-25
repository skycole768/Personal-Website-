import Navbar from "./Navbar";
import Landing from "./Landing";
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import "../styles/homepage.css"
import React, {useRef, useState, useEffect} from 'react'

function Homepage(props) {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const homeRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      { name: 'home', ref: homeRef },
      { name: 'projects', ref: projectsRef },
      { name: 'resume', ref: resumeRef },
      { name: 'about', ref: aboutRef },
      { name: 'contact', ref: contactRef }
    ];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const { offsetTop, offsetHeight } = section.ref.current;
        if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
          setActiveSection(section.name);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to set the correct section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [homeRef, projectsRef, resumeRef, aboutRef, contactRef]);
    
    return (
      <div className="homepage">
        <Landing ref={homeRef} projectsRef={projectsRef}/>
        <div className="seperater"></div>
        <Navbar projectsRef = {projectsRef} resumeRef={resumeRef} aboutRef={aboutRef} contactRef={contactRef} homeRef={homeRef} activeSection={activeSection}/>
        <Projects ref ={projectsRef} contactRef={contactRef}/>
        <Resume ref ={resumeRef}/>
        <About ref ={aboutRef}/>
        <Contact ref ={contactRef}/>
      </div>
    );
  }
  
  export default Homepage;