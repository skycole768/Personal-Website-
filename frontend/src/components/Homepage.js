import Navbar from "./Navbar";
import '../styles/homepage.css';
import compSciCity from '../images/comp-sci-city.jpg'
import bunny from '../images/bunny.gif'
import sun from '../images/sun.png'
import landscape from '../images/landscape.png'

function Homepage(props) {

  
    return (
      <div className="homepage">
        <Navbar/>
        <img src = {sun} alt = "sun" className = "sun"/>
        <div className="HomepageWrapper">
          <div className="column1">
          <h1 className="Header">Welcome to Skyler's Portfolio</h1>
          <h3 className="SubText">Documentation of a young up and coming software engineer. <strong>Stay Tuned!</strong></h3>
          </div>
          <div className="column2">
          <img className="image" alt="compSciCity"src={compSciCity}/>
          </div>
        </div>
        <img src = {bunny} alt = "bunny" className = "bunny"/>
        <img alt="landscape" className='landscape' src ={landscape}/>
      </div>
    );
  }
  
  export default Homepage;