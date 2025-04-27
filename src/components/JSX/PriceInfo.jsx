import { useEffect, useState } from 'react'
import '../CSS/PriceInfo.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import br from '../../assets/flags/br.svg'
import py from '../../assets/flags/py.svg'
import us from '../../assets/flags/us.svg'
import ar from '../../assets/flags/ar.svg'

const PriceInfo = ({ exchangeRates }) => {


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
          <img src={us} className='flag-us' />
          <span className="price-tag-info">U$ 1.00</span>
          <img src={us} className='flag-us' />
          <span className="price-tag-info">U$ 1.00</span>
          <img src={us} className='flag-us' />
          <span className="price-tag-info">U$ 1.00</span>
        </div>

        <div className='coin-symbol-box'>
          <div className='coin-symbol'><p>USD/BRL</p></div>
          <div className='coin-symbol'><p>USD/PYG</p></div>
          <div className='coin-symbol'><p>USD/ARS</p></div>
        </div>

        <div className='other-flags'>
          <img src={br} className='flag-icon-info' />
          <span className="price-tag-other">
            R$ {exchangeRates.moeda2?.toFixed(2)}
          </span>

          <img src={py} className='flag-icon-info' />
          <span className="price-tag-other">
            G$ {exchangeRates.moeda3?.toLocaleString()}
          </span>

          <img src={ar} className='flag-icon-info' />
          <span className="price-tag-other">
            P$ {exchangeRates.moeda4?.toLocaleString()}
          </span>
        </div>
      </div>

      <div className='social-media'>
        <span>
          REDES SOCIALES <FaInstagram className='social-icon' /> <FaFacebook className='social-icon' /> @MADRIDCENTER
        </span>
      </div>
    </>
  )
}

export default PriceInfo
