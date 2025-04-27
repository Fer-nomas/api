import React, { useState, useEffect } from 'react'
import '../CSS/Carousel.css'
import br from '../../assets/flags/br.svg'
import us from '../../assets/flags/us.svg'
import py from '../../assets/flags/py.svg'
import ar from '../../assets/flags/ar.svg'

const Carousel = ({ images, names, prices, cod, currentIndex, setCurrentIndex }) => {
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length)
        setFade(true)
      }, 500) // mismo tiempo que la transición en CSS
    }, 10000)

    return () => clearInterval(interval)
  }, [images.length, setCurrentIndex])

  const formatNumber = (num, d = 2) =>
    num.toLocaleString('es-ES', { minimumFractionDigits: d, maximumFractionDigits: d })

  return (
    <div className="wrapper">
      <div className="carousel-box">
        <div className="carousel-item">
          <img
            src={images[currentIndex]}
            alt="Image"
            className={`carousel-images ${fade ? 'fade-in' : 'fade-out'}`}
          />
          <div className="product-info-active">Cod: {cod[currentIndex]}</div>
        </div>
      </div>

      <div className="price">
        <div className="price-row destaque">
          <img src={br} id="flag-br" />
          <span id="price-tag">R$ {formatNumber(prices[currentIndex]?.brl || 0, 2)}</span>
        </div>
        <div className="price-row">
          <img src={us} className="flag-icon" />
          <span className="price-tag">U$ {formatNumber(prices[currentIndex]?.usd || 0, 2)}</span>
        </div>
        <div className="price-row">
          <img src={py} className="flag-icon" />
          <span className="price-tag">₲ {formatNumber(prices[currentIndex]?.pyg || 0, 0)}</span>
        </div>
        <div className="price-row">
          <img src={ar} className="flag-icon" />
          <span className="price-tag">$ {formatNumber(prices[currentIndex]?.ars || 0, 0)}</span>
        </div>
      </div>
    </div>
  )
}

export default Carousel
