import WappButton from '../../assets/whatsappButton/WhatsApp.svg.png'
import './whatsappButton.css'

const WhatsappButton = () => {
    return (
        <div className="whatsappButton__Container">
            <a href="https://wa.me/5491133412690" target='_blank' rel="noreferrer"><img src={WappButton} className='whatsappButton__Image'/></a>
        </div>
    )
}

export default WhatsappButton