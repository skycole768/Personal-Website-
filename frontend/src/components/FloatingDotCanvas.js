// FloatingDotsCanvas.js
import React, { useEffect, useRef } from 'react';

const FloatingDotsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');


    // Dot class
    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1; // Dot size between 1 and 6
        this.speedX = Math.random() * 3 - 1.5; // Speed in x direction
        this.speedY = Math.random() * 3 - 1.5; // Speed in y direction
        this.color = 'rgba(0, 150, 255, 0.7)'; // Dot color
      }

      update() {
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
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      dots.forEach(dot => {
        dot.update();
        dot.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default FloatingDotsCanvas;
