import './header.css'
import bgVideo from '../../assets/header/VID-6.mp4'

const Header = () => {
    return (
       <div className='header__MainContainer' id='Header'>
            <div className='header__Overlay'></div>
                <video src={bgVideo} className='header__Video'autoPlay loop muted />
                <div className='header__Text-Container'>
                    <h1 className='header__Title'>DESARROLLOS A MEDIDA</h1>
                    {/* <h4 className='header__Subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4> */}
                    <p className='header__Text'>
                    # Módulos Led 
                    <br />
                    # Módulos de Electrónica 
                    <br />
                    # Drivers Led 
                    <br />
                    # Protectores de Descarga 
                    <br />
                    # Lentes # Fotocontroles
                    </p>
                </div>            
       </div>
    )
}

export default Header