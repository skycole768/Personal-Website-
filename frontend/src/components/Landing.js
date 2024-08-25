import '../styles/landing.css';
import bunny from '../images/bunny.gif'
import sun from '../images/sun.png'
import landscape from '../images/landscape.png'
import React, { useEffect, useState } from 'react';

function scrollToElement(ref, duration = 1000) {
  const start = window.scrollY;
  const targetPosition = ref.current.getBoundingClientRect().top + start;
  const distance = targetPosition - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Normalize to 1

    window.scrollTo({
      top: start + distance * easeInOutQuad(progress),
      behaviou: 'auto'
    });

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animation);
}

const Landing = React.forwardRef((props, ref) => {
  const {projectsRef} = props
  const[bunnyText, setBunnyText] = useState("Hi, Click Me <3")
  const[bunnyCount, setBunnyCount] = useState(0)
  const bunnyConvo = ["I'm cute aren't I <3.", "I'm supppeer cute rt <3.", "Hehee. Thnx xoxo <3.", "Ok, I'm a lil tired <3.", "Cute things need rest too <3.", "Hey, what did I just say <3.", "Ok, I get it <3.", "Stop clicking me <3.", " Enough <3!", "Do you have a brain <3!", "Leave ME ALONE! :("]
  useEffect(() => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size to fill the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Dot class
  class Dot {
      constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = 2; // Dot size between 1 and 6
          this.speedX = Math.random() * .4 - .2; // Speed in x direction
          this.speedY = Math.random() *  .4 - .2; // Speed in y direction
          const colors = ['#feb47b', '#ff6f61', '#f9c8b2'];
          this.color = colors[Math.floor((Math.random() * colors.length))]


      }

      update() {
          // Move the dot
          this.x += this.speedX;
          this.y += this.speedY;

          // Bounce off edges
          if (this.x + this.size > canvas.width || this.x - this.size < 0) {
              this.speedX = -this.speedX;
          }
          if (this.y + this.size > canvas.height || this.y - this.size < 0) {
              this.speedY = -this.speedY;
          }
      }

      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
      }
  }

  // Create dots
  const dots = [];
  const numberOfDots = 100; // Number of dots

  for (let i = 0; i < numberOfDots; i++) {
      dots.push(new Dot());
  }

  // Animation loop
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      dots.forEach(dot => {
          dot.update();
          dot.draw();
      });
      requestAnimationFrame(animate);
  }

  animate();
  }, []);

  const handleBunny = () => {

    if (bunnyCount < bunnyConvo.length){
      setBunnyText(bunnyConvo[bunnyCount]);
      setBunnyCount(bunnyCount + 1);
    }
  }

  const handleProject = () => {
    if(projectsRef && projectsRef.current){
      scrollToElement(projectsRef, 8000);
    }
  };

  

    return (
      <div className="landPage" ref={ref}>
        <div className="homeContainer">
          <canvas id='canvas'></canvas>
            <div className="landPageCard">
              <h1 className="Header">Welcome to <span className = "fun">Skyler's</span> Portfolio</h1>
              <div className = 'bottomCard'>
              <h3 className="SubText">Documentation of a young up and coming software engineer. <span className = "fun">Stay Tuned!</span></h3>
              <button onClick={handleProject} className="seeprojects">See my Projects</button>
              </div>
            </div>
        </div>
        <div className ="homeBottomContainer">
          <img src={sun} alt ="sun" className = "sun"/>
          <div className = 'bunnyContainer'>
            <img onClick = {handleBunny} src = {bunny} alt = "bunny" className = "bunny"/>
            <p  className='dialouge'>
              {bunnyText}
            </p>
          </div>
        </div>
        <div className = "landscapeContainer">
          <img alt="landscape" className='landscape' src ={landscape}/>
        </div>
      </div>
    );
  })
  
  export default Landing;