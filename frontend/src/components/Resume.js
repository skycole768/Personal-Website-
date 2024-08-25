import '../styles/resume.css';
import React from 'react';

const Resume = React.forwardRef((props, ref) => {
  return (
    <div className="resume" ref={ref}>
      <div className='resumeWrappper'>
      <h1 className='resumeHeader'>Resume</h1>
      <div className="iframeContainer">
        <iframe
          src="https://docs.google.com/document/d/16bReXkZ-dGbzv60ECo25P1Jif7Ls0W6lR8hJN6doDTQ/preview"
          width="100%"
          height= '800px'
          style={{ border: 'none'}}
          title="Google Docs Resume"
        ></iframe>
      </div>
      </div>
    </div>
  );
})

export default Resume;