import React, { useEffect, useState } from 'react';
import '../styles/ImageSlider.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import thumb1 from '../assets/thumb1.jpg';
import thumb2 from '../assets/thumb2.jpg';
import thumb3 from '../assets/thumb3.jpg';

const images = [slide1, slide2, slide3, slide4, slide5];

const ImageSlider = ({ setProductView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="manual-slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* 🔁 Updated thumbnails to switch to offer view on click */}
      <div className="side-thumbnails">
        <img
          src={thumb1}
          alt="Thumb 1"
          className="thumbnail-img"
          onClick={() => setProductView('offer')}
        />
        <img
          src={thumb2}
          alt="Thumb 2"
          className="thumbnail-img"
          onClick={() => setProductView('offer')}
        />
        <img
          src={thumb3}
          alt="Thumb 3"
          className="thumbnail-img"
          onClick={() => setProductView('offer')}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
