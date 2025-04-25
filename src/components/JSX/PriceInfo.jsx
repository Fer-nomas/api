import Flag from 'react-world-flags';
import '../CSS/PriceInfo.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const PriceInfo = () => {

    return (
        <div>
            <div className='title-box'>
                <div className='title-exchange'>
                    
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
                    <div className='coin-symbol'><p>USD/PGY</p></div>
                    <div className='coin-symbol'><p>USD/ARS</p></div>
                </div>
                <div className='other-flags'>
                    <Flag code="BR" className='flag-icon-info'/>
                    <span className="price-tag-other">R$ 1.00</span>
                    <Flag code="PY" className='flag-icon-info'/>
                    <span className="price-tag-other">G$ 1.00</span>
                    <Flag code="AR" className='flag-icon-info'/> 
                    <span className="price-tag-other">P$ 1.00</span>
                </div>
            </div>
            <div className='social-media'>
                <span>REDES SOCIALES <FaInstagram className='social-icon'/><span> </span><FaFacebook className='social-icon'/> @MADRIDCENTER   </span>
            </div>
        </div>
    )
}

export default PriceInfo