import WappButton from '../../assets/whatsappButton/WhatsApp.svg.png'
import './whatsappButton.css'

const WhatsappButton = () => {
    return (
        <div>
            <div className="whatsappButton__Container">
                <a href="https://wa.me/5491133412690" target='_blank' rel="noreferrer"><span className='whatsappButton__Title'>Ventas 2</span><img src={WappButton} className='whatsappButton__Image'/></a>            
            </div>
            <div className="whatsappButton__Container2">
                <a href="https://wa.me/5491139433311" target='_blank' rel="noreferrer"><span className='whatsappButton__Title'>Ventas 1</span><img src={WappButton} className='whatsappButton__Image'/></a>            
            </div>
        </div>
    )
}

export default WhatsappButton