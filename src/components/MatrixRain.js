import React, { useEffect, useRef } from 'react';
import '../css/matrixrain.css'; // Import custom CSS for Matrix Rain style

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = canvas.width;
    const fontSize = 20;
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ';

    const drop = [];

    for (let i = 0; i < columns; i++) {
      drop[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#1e293b'; // Color of the characters
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drop.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drop[i] * fontSize);

        if (drop[i] * fontSize > canvas.height && Math.random() > 0.975) {// Adjust density here
          drop[i] = 0;
        }

        drop[i]++;
      }
    };

    const animation = setInterval(draw, 50); // Adjust speed here

    return () => clearInterval(animation);
  }, []);

  return (
    <div className="matrix-rain-container">
      <canvas ref={canvasRef} ></canvas>
    </div>
  );
};

export default MatrixRain;
