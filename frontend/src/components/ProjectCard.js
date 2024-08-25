import React, { useState } from 'react';
import '../styles/projectCard.css';
import GitHubRepoViewer from './GithubRepoViewer';


function ProjectCard(props) {


  const [isVisible, setIsVisible] = useState(false);
  const item = props.item;
  const contactRef = props.contactRef

  const handleOpen = () =>  {
    setIsVisible(prevState => !prevState); 
  };

  const handleContactScroll = () =>  {
    contactRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const buttonText = item.private 
    ? (isVisible ? 'Close Code Snippets' : 'Request Access') 
    : (isVisible ? 'Close Source Code' : 'Show Source Code');
  
  return (
    <div className="card">
      <h1 className='title'>{item.title}</h1>
      <div className="descriptionWrapper">
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
      <button className = 'sourceButton' onClick={item.private ? handleContactScroll : handleOpen} > {buttonText} </button>
      {isVisible && (
          <div className="source">
            <GitHubRepoViewer owner={item.owner} repo={item.repo} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;