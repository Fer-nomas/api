import './App.css'
import Header from './components/JSX/Header'
import logo from './assets/MadridLogo.png'
import Carousel from './components/JSX/Carousel'
import iPhoneWhite from './assets/iPhoneWhite.webp'
import iPhoneBlack from './assets/iPhoneBlack.webp'
import Description from './components/JSX/Description'
import Foothold from './components/JSX/Foothold'
import { useState, useEffect } from 'react'
import PriceInfo from './components/JSX/PriceInfo'

const images = [
  iPhoneBlack,
  iPhoneWhite
]

function App() {
  const [showPriceInfo, setShowPriceInfo] = useState(false)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const loop = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setShowPriceInfo(prev => !prev);
        setVisible(true);
      }, 1500);
    }, 10000);
    return () => clearInterval(loop);
  }, []);

  return (
    <div>
      <Header Logo={logo} />
      
      <div className={`fade-container ${!visible ? 'fade-out' : ''}`}>
        {showPriceInfo ? (
          <>
            <Description />
            <Carousel images={images} />
            <Foothold />
          </>
        ) : (
          <PriceInfo />
        )}
      </div>
    </div>
  )
}

export default App
