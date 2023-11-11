import './header.css'
import bgVideo from '../../assets/header/VID-6.mp4'

const Header = () => {
    return (
       <div className='header__MainContainer' id='Header'>
            <div className='header__Overlay'></div>
                <video src={bgVideo} className='header__Video'autoPlay loop muted />
                <div className='header__Text-Container'>
                    <h1 className='header__Title'>Desarrollo y Fabricación de Módulos para Iluminación y Electrónica</h1>
                    {/* <h4 className='header__Subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4> */}
                    {/* <p className='header__Text'>
                    &#10148; Módulos Led 
                    <br />
                    &#10148; Módulos de Electrónica 
                    <br />
                    &#10148; Drivers Led 
                    <br />
                    &#10148; Protectores de Descarga 
                    <br />
                    &#10148; Lentes 
                    <br />
                    &#10148; Fotocontroles
                    </p> */}
                </div>            
       </div>
    )
}

export default Header