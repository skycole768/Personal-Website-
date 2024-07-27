import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import '../styles/projects.css';
import DAWGIT from '../images/DAWGIT.png'
import DAWGEAT from '../images/DAWGEAT.png'

function Projects(props) {

  const projects = [
    { title: 'Dawgit Web App', 
      description: "Web application with react that had the same functionality as Reddit and interfaced with a MySQL backend, allowing users to search through the database and authorized users to add, update, and delete their posts/comments.",
      imageUrl: DAWGIT,
      owner: "skycole768",
      repo: "DawgIt"
    },
    { title: 'DawgEats Web App', 
      description: "A web application with react that showcased athen’s local restaurants and interfaced with a Mongodb backend, allowing users to search through the database and authorized users to add, update, and delete their restaurants.",
      imageUrl: DAWGEAT,
      owner: "skycole768",
      repo: "DawgEats"
    
    }
  ];
  
    return (
      <div className="Projects">
        <Navbar/>
        <h1 className="header">Project Portfolio</h1>
        <div className = "projects-container">
          {projects.map((project, index) => {
             console.log(index); // Should log 'number'
             return <ProjectCard key={index} item={project} />;
           })}
      </div>
    </div>
    );
  }
  
  export default Projects;