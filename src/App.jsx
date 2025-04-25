import './App.css'
import Header from './components/JSX/Header'
import logo from './assets/MadridLogo.png'
import Carousel from './components/JSX/Carousel'
import iPhoneWhite from './assets/iPhoneWhite.webp'
import iPhoneBlack from './assets/iPhoneBlack.webp'
import Description from './components/JSX/Description'
import Foothold from './components/JSX/Foothold'
import { useState, useEffect } from 'react'

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
    }, 4500);
    return () => clearInterval(loop);
  }, []);

  return (
    <div>
      <Header Logo = {logo}/>
      <Description/>
      <Carousel  images = {images}/>
      <Foothold/>
    </div>
  )
}

export default App
