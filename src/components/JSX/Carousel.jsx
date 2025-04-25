import React, { useState, useEffect } from 'react'
import '../CSS/Carousel.css'
import Flag from 'react-world-flags';

const Carousel = ({ images, names, prices }) => {
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
            <div></div>
            <div className='carousel-box'>
                {images.map((img, index) =>
                    <>
                        <h2 className={`carousel-images ${index === currentIndex ? 'active' : ''}`}>
                            {names[index]}
                        </h2>
                        <img
                            key={index}
                            src={img}
                            alt='Images'
                            className={`carousel-images ${index === currentIndex ? 'active' : ''}`}
                        />
                        {/* Precios dinámicos debajo de la imagen */}
                        <div className={`product-prices ${index === currentIndex ? 'active' : ''}`}>
                            {prices && prices[index] && (
                                <div className="dynamic-prices">
                                    <div className="price-item">

                                        <span>R$ {formatNumber(prices[index].brl)}</span>
                                    </div>
                                    <div className="price-item">

                                        <span>U$ {formatNumber(prices[index].usd)}</span>
                                    </div>
                                    <div className="price-item">

                                        <span>₲ {formatNumber(prices[index].pyg)}</span>
                                    </div>
                                    <div className="price-item">

                                        <span>$ {formatNumber(prices[index].ars)}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
            {/* Mantener la parte de cotización del día sin modificar */}
            <div className="price">
                <div className="price-row destaque">
                    <Flag code="BR" id='flag-br' />
                    <span id="price-tag">R$ 7.358,40</span>
                </div>

                <div className="price-row">
                    <Flag code="US" className="flag-icon" />
                    <span className="price-tag">U$ 1.260.00</span>
                </div>

                <div className="price-row">
                    <Flag code="PY" className="flag-icon" />
                    <span className="price-tag">U$ 1.260.00</span>
                </div>

                <div className="price-row">
                    <Flag code="AR" className="flag-icon" />
                    <span className="price-tag">U$ 1.260.00</span>
                </div>
            </div>
        </div>
    )
}

export default Carousel