import React, { useState, useEffect } from 'react';
import '../CSS/Carousel.css';
import br from '../../assets/flags/br.svg';
import us from '../../assets/flags/us.svg';
import py from '../../assets/flags/py.svg';
import ar from '../../assets/flags/ar.svg';

const Carousel = ({ images, names, prices, cod, currentIndex, setCurrentIndex }) => {
  const [fade, setFade] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(currentIndex);

  useEffect(() => {

    const interval = setInterval(() => {
      // First fade out
      setFade(false);

      // After the fade-out animation completes, change the image
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setDisplayIndex(nextIndex);

        // Then immediately trigger fade-in
        setFade(true);
      }, 500); // Match this to your CSS transition time
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // This effect handles when currentIndex is changed externally
    setDisplayIndex(currentIndex);
    setFade(true);
  }, [currentIndex]);

  const formatNumber = (num, d = 2) =>
    num.toLocaleString('es-ES', { minimumFractionDigits: d, maximumFractionDigits: d });

  return (
    <div className="wrapper">
      <div className="carousel-box">
        <div className="carousel-item">
          <img
            src={images[displayIndex]}
            alt="Image"
            className={`carousel-images ${fade ? 'fade-in' : 'fade-out'}`}
          />
          <div className="product-info-active">Cod: {cod[displayIndex]}</div>
        </div>
      </div>

      <div className="price">
        <div className="price-row destaque">
          <img src={br} id="flag-br" />
          <span id="price-tag">R$ {formatNumber(prices[displayIndex]?.brl || 0, 2)}</span>
        </div>
        <div className="price-row">
          <img src={us} className="flag-icon" />
          <span className="price-tag">U$ {formatNumber(prices[displayIndex]?.usd || 0, 2)}</span>
        </div>
        <div className="price-row">
          <img src={py} className="flag-icon" />
          <span className="price-tag">₲ {formatNumber(prices[displayIndex]?.pyg || 0, 0)}</span>
        </div>
        <div className="price-row">
          <img src={ar} className="flag-icon" />
          <span className="price-tag">$ {formatNumber(prices[displayIndex]?.ars || 0, 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;