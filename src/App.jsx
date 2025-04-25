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
  const [novedades, setNovedades] = useState([])
  const [loadingImage, setLoadingImage] = useState(true)
  const [errorImage, setErrorImage] = useState(null)

  useEffect(() => {
    const fetchNovedades = async () => {
      try {
        const response = await fetch('/api/admin/novidades')
        if (!response.ok) throw new Error(`Error: ${response.status}`)
        const data = await response.json()
        setNovedades(data)
      } catch (err) {
        setErrorImage(err.message)
      } finally {
        setLoadingImage(false)
      }
    }

    fetchNovedades()
  }, [])


  const [showPriceInfo, setShowPriceInfo] = useState(false)
  const [visible, setVisible] = useState(true)
  const apiTime = '/api/admin/cotizaciones/tiempo'
  const apiCoto = '/api/admin/cambio-externo'
  const [products, setProducts] = useState([]);

  const [timeData, setTimeData] = useState(null)
  const [rateData, setRateData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch(apiTime)
        const timeResult = await timeResponse.json()
        setTimeData(timeResult)

        const rateResponse = await fetch(apiCoto)
        const rateResult = await rateResponse.json()
        setRateData(rateResult)
        const response = await fetch('/api/admin/novidades');
        const data = await response.json();
        setProducts(data);
        console.log(data)
        setLoading(false);

      } catch (err) {
        setError('Error fetching data. Please try again later.')
        setLoading(false)
        console.error(err)
      }
    }


    fetchData()

    const dataIntervalId = setInterval(fetchData, 60000)
    const clockIntervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(dataIntervalId)
      clearInterval(clockIntervalId)
    }
  }, [])
  const productIName = products.map(product => product.nombre);
  const productImages = products.map(product => product.foto);
  const productPrices = products.map(product => product.precios); // Ahora extraemos el objeto precios completo

  useEffect(() => {
    const loop = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setShowPriceInfo(prev => !prev)
        setVisible(true)
      }, 1500)
    }, 10000)

    return () => clearInterval(loop)
  }, [])

  if (loading && !timeData && !rateData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-red-100 rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-700">Error</h2>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header
        Logo={logo}
        timeData={timeData}
        rateData={rateData}
        currentTime={currentTime}
      />

      <div className={`fade-container ${!visible ? 'fade-out' : ''}`}>
        {showPriceInfo ? (
          <>
            <Description />
            <Carousel
              images={productImages}
              names={productIName}
              prices={productPrices} // Pasamos el objeto de precios completo
            />
            <Foothold />
          </>
        ) : (
          <PriceInfo
            timeData={timeData}
            rateData={rateData}
            currentTime={currentTime}
          />
        )}
      </div>
    </div>
  )
}

export default App