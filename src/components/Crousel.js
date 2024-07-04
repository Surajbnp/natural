import React, { useState, useEffect } from "react";
import styles from "../styles/crousel.module.css";

const Crousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselImages}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img width={'100%'} key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Crousel;
