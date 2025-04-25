import '../CSS/Header.css'

const Header = ({Logo}) => {
    return (
        <header>
            <div className='header-logo'>
                <img
                    src={Logo}
                    className='image-logo'
                />
            </div>
            <div className='header-box'>
                <div className='header-data'></div>
            </div>
        </header>
    )
}

export default Header;