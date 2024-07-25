import Navbar from "./Navbar";
import '../styles/homepage.css';
import compSciCity from '../images/comp-sci-city.jpg'

function Homepage(props) {

  
    return (
      <div className="homepage">
        <Navbar/>
        <div className="HomepageWrapper">
          <div className="column1">
          <h1 className="Header">Welcome to Skyler's Portfolio</h1>
          <h3 className="SubText">Documentation of a young up and coming software engineer. <strong>Stay Tuned!</strong></h3>
          </div>
          <div className="column2">
          <img className="image" alt="compSciCity"src={compSciCity}/>
          </div>
        </div>
        <img alt="landscape" className='landscape' src ="https://www.pngkey.com/png/full/765-7653840_euclidean-vector-angle-forest-night-free-frame-clipart.png"/>
      </div>
    );
  }
  
  export default Homepage;