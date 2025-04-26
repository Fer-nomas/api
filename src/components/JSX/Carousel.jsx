import React, { useState, useEffect } from 'react'
import '../CSS/Carousel.css'
import Flag from 'react-world-flags';

const Carousel = ({ images, names, prices, cod }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                return (prev + 1) % images.length;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Formatear números con separadores de miles
    const formatNumber = (num) => {
        return num.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className='wrapper'>
            <div className='carousel-box'>
            {images.map((img, index) =>
                <>
                    <div className={`product-info ${index === currentIndex ? 'active' : ''}`}>
                        {names[index]}
                        {cod[index]}
                    </div>  
                    <img
                        key={index}
                        src={img}
                        alt='Images'
                        className={`carousel-images ${index === currentIndex ? 'active' : ''}`}
                    />
                    <div className={`product-prices ${index === currentIndex ? 'active' : ''}`}>
                    </div>
                </>
                )}
            </div>

            <div className="price">
                <div className="price-row destaque">
                    <Flag code="BR" id='flag-br' />
                    <span id="price-tag">R$ {formatNumber(prices[currentIndex]?.brl || 0, 'BR')}</span>
                </div>

                <div className="price-row">
                    <Flag code="US" className="flag-icon" />
                    <span className="price-tag">U$ {formatNumber(prices[currentIndex]?.usd || 0, 'US')}</span>
                </div>

                <div className="price-row">
                    <Flag code="PY" className="flag-icon" />
                    <span className="price-tag">₲ {formatNumber(prices[currentIndex]?.pyg || 0, 'PY')}</span>
                </div>

                <div className="price-row">
                    <Flag code="AR" className="flag-icon" />
                    <span className="price-tag">$ {formatNumber(prices[currentIndex]?.ars || 0, 'AR')}</span>
                </div>
            </div>
        </div>
    )
}

export default Carousel