import './App.css'
import Header from './components/JSX/Header'
import logo from './assets/MadridLogo.png'
import Carousel from './components/JSX/Carousel'
import Description from './components/JSX/Description'
import Foothold from './components/JSX/Foothold'
import { useState, useEffect } from 'react'
import PriceInfo from './components/JSX/PriceInfo'

function App() {
  const [showPriceInfo, setShowPriceInfo] = useState(false)
  const [visible, setVisible] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Usa una ruta relativa que será interceptada por el proxy
        const response = await fetch('/api/admin/novidades');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Animation loop for toggling between components
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

  // Extract product images for the carousel
  const productImages = products.map(product => product.foto);

  return (
    <div>
      <Header Logo={logo} />

      <div className={`fade-container ${!visible ? 'fade-out' : ''}`}>
        {loading ? (
          <div className="loading">Cargando productos...</div>
        ) : (
          showPriceInfo ? (
            <>
              <Description />
              <Carousel images={productImages} />
              <Foothold />
            </>
          ) : (
            <PriceInfo products={products} />
          )
        )}
      </div>
    </div>
  )
}

export default App