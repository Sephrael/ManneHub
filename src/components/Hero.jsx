import React, { useState } from 'react';

export default function Hero() {
  const colors = ['green', 'red', 'blue', 'orange', 'yellow'];
  const [bgColor, setBgColor] = useState('white');

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello World!!</h1>
      </div>
    </div>
  );
}