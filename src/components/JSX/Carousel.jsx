import React, {useState, useEffect} from 'react'
import '../CSS/Carousel.css'
import Flag from 'react-world-flags';

const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                return (prev + 1) % images.length;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    
    return (
        <div className='wrapper'>
            <div></div>
            <div className='carousel-box'>
                {images.map((img, index) =>
                    <img
                        key={index}
                        src={img}
                        alt='Images'
                        className={`carousel-images ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    />
                )}
            </div>
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