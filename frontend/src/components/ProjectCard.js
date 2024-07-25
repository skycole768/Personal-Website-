import React from 'react';
import '../styles/projectCard.css';

function ProjectCard(props) {
  const item = props.item;

  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.title} height={200} />
      <div className="descriptionWrapper">
      <h1 className='title'>{item.title}</h1>
      <h3 className = 'description'>{item.description}</h3>
      <button className = 'sourceButton'>Open Source Code</button>
      </div>
    </div>
  );
}

export default ProjectCard;