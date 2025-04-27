import '../CSS/Description.css'

const Description = ({ productIName, cod }) => {
    if (!productIName) {
        return null;
    }

    const partes = productIName.split('-');

    return (
        <div className="description-box">
            <div className="line-above-description" />
            <div className="message-description">
                <div className="name-animation">
                    <div style={{ fontWeight: 'bold' }}>{partes[0]?.trim()}</div>
                    <div>{partes.slice(1).join('-').trim()} {cod}</div>
                </div>
            </div>
        </div>
    );
}

export default Description;
