import { useEffect, useState } from 'react';
import Flag from 'react-world-flags';
import '../CSS/PriceInfo.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const PriceInfo = () => {
    const [exchangeRates, setExchangeRates] = useState({
        moeda2: null, // Real
        moeda3: null, // Guaraní
        moeda4: null, // Peso Argentino
    });
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/admin/cambio-externo');
            const data = await response.json();
            setExchangeRates({
                moeda2: data.moeda2,
                moeda3: data.moeda3,
                moeda4: data.moeda4,
            });
    
          } catch (err) {
            console.error('Error fetching exchange rates:', err)
          }
        }
        fetchData()
      }, [])

    return (
        <>
            <div className='title-box'>
                <div className='title-exchange'>
                    <h1>COTAÇÕES DO DIA</h1>
                    <h2>Cotação exclusiva para compras na Madrid Center.</h2>
                </div>
            </div>
            <div className='prices-by-dolar'>
                <div className='USD-icon'>
                    <Flag code="US" className='flag-us' />
                    <span className="price-tag-info">U$ 1.00</span> 
                    <Flag code="US" className='flag-us' /> 
                    <span className="price-tag-info">U$ 1.00</span>
                    <Flag code="US" className='flag-us' /> 
                    <span className="price-tag-info">U$ 1.00</span>
                </div>
                <div className='coin-symbol-box'>
                    <div className='coin-symbol'><p>USD/BRL</p></div>
                    <div className='coin-symbol'><p>USD/PYG</p></div>
                    <div className='coin-symbol'><p>USD/ARS</p></div>
                </div>
                <div className='other-flags'>
                    <Flag code="BR" className='flag-icon-info'/>
                    <span className="price-tag-other">R$ {exchangeRates.moeda2?.toFixed(2)}</span>

                    <Flag code="PY" className='flag-icon-info'/>
                    <span className="price-tag-other">G$ {exchangeRates.moeda3?.toLocaleString()}</span>

                    <Flag code="AR" className='flag-icon-info'/> 
                    <span className="price-tag-other">P$ {exchangeRates.moeda4?.toLocaleString()}</span>
                </div>
            </div>
            <div className='social-media'>
                <span>REDES SOCIALES <FaInstagram className='social-icon'/><span> </span><FaFacebook className='social-icon'/> @MADRIDCENTER   </span>
            </div>
        </>
    );
};

export default PriceInfo;
