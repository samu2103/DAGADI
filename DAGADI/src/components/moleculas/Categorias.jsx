import React, { useState } from 'react';

import "../../assets/styles/categorias.css";
import carrusel1 from "../../assets/img/card1.0.jpeg";
import carrusel2 from "../../assets/img/carrusel1.jpeg";
import carrusel3 from "../../assets/img/carrusel1.jpeg";

function Categorias() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [carrusel1, carrusel2, carrusel3];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="carousel-container">
        <button onClick={handlePrev}>&lt;</button>
        <img src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} />
        <button onClick={handleNext}>&gt;</button>
      </div>
    </>
  );
}

export default Categorias;
