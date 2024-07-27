import React, { useState } from 'react';
import '../styles/projectCard.css';
import GitHubRepoViewer from './GithubRepoViewer';


function ProjectCard(props) {

  const [isVisible, setIsVisible] = useState(false);
  const item = props.item;

  const handleOpen = () =>  {
    setIsVisible(prevState => !prevState);
  };
  
  return (
    <div className="card">
      <h1 className='title'>{item.title}</h1>
      <img className = "cardImage" src={item.imageUrl} alt={item.title} height={200} />
      <div className="descriptionWrapper">
      <h3 className = 'description'>{item.description}</h3>
      <button className = 'sourceButton' onClick={handleOpen} > {isVisible ? 'Close' : 'Show'} Source Code</button>
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