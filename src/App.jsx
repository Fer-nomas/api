import './App.css'
import Header from './components/JSX/Header'
import logo from './assets/MadridLogo.png'
import Carousel from './components/JSX/Carousel'
import Description from './components/JSX/Description'
import Foothold from './components/JSX/Foothold'
import PriceInfo from './components/JSX/PriceInfo'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const [timeData, setTimeData] = useState(null);
  const [rateData, setRateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const [visible, setVisible] = useState(true);

  const apiTime = '/api/admin/cotizaciones/tiempo';
  const apiCoto = '/api/admin/cambio-externo';

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch(apiTime);
        const timeResult = await timeResponse.json();
        setTimeData(timeResult);

        const rateResponse = await fetch(apiCoto);
        const rateResult = await rateResponse.json();
        setRateData(rateResult);

        const response = await fetch('/api/admin/novidades');
        const data = await response.json();
        if (data.length > 0) {
          const shuffledData = shuffleArray(data);
          setProducts(shuffledData);
          setCurrentIndex(0);
        }

        setLoading(false);
      } catch (err) {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();

    const dataIntervalId = setInterval(fetchData, 40000);
    const clockIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(dataIntervalId);
      clearInterval(clockIntervalId);
    };
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setShowPriceInfo(prev => !prev);
        setVisible(true);
      }, 1500);
    }, 20000);

    return () => clearInterval(loop);
  }, []);

  const productIName = products.map(product => product.nombre);
  const productImages = products.map(product => product.foto);
  const productPrices = products.map(product => product.precios);
  const productCod = products.map(product => product.codigo);

  if (loading && !timeData && !rateData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-red-100 rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-700">Error</h2>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Header
        Logo={logo}
        timeData={timeData}
        rateData={rateData}
        currentTime={currentTime}
      />

      <div className={`fade-container ${!visible ? 'fade-out' : ''}`}>
        {showPriceInfo ? (
          <>
            <Description
              productIName={productIName[currentIndex]}
              cod={productCod[currentIndex]}
            />

            <Carousel
              images={productImages}
              names={productIName}
              prices={productPrices}
              cod={productCod}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
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
    </main>
  );
}

export default App;