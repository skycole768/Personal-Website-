import Navbar from "./Navbar";
import '../styles/resume.css';
import React from 'react';

function Resume(props) {
  return (
    <div className="resume">
      <Navbar/>
      <div className='resumeWrappper'>
      <h1>Resume</h1>
      <div className="iframeContainer">
        <iframe
          src="/RESUME.pdf"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="PDF Viewer"
        ></iframe>
      </div>
      </div>
    </div>
  );
}

export default Resume;