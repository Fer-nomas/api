import '../CSS/Foothold.css'

const Foothold = ({productIName}) => {
    return (
        <div>
            <div className='description-box'>
                <div className='message-description'><span>{productIName}</span></div>
            </div>
        </div>
    )
}

export default Foothold
