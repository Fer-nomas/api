import '../CSS/Header.css'
import Flag from 'react-world-flags';

const Header = ({ Logo, timeData, currentTime, rateData }) => {
  return (
    <header>
      <div className='header-logo'>
        <img
          src={Logo}
          className='image-logo'
        />
      </div>
      <div className='header-box'>
        <div className='header-data'>
            <div className='exchange-info'>
              <p>CÂMBIO EM TEMPO REAL</p>
            </div>
            <div className='coin-price'>
              <Flag code="BR" className='flag-br-header'/>
              <div className='br-symbol'><p>R$</p></div>
              <span className='price-br'>
                {rateData?.moeda2?.toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
              </span>
            </div>
            <div className='line-above'/>
            <div className='time-info'>
              <Flag code="BR" className='flag-br-header-time'/>
              <span className='current-time-br'>
              {currentTime.toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              })}</span>
              <Flag code="PY" className='flag-br-header-time'/>
              <span className='current-time-br'>
              {currentTime.toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              })}</span>
            </div>
            <div className='line-below'/>
            <div className='date-info'>
            <span className='date-info-text'>{timeData?.fecha}</span>
            <span>{timeData?.dia_semana}</span>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header