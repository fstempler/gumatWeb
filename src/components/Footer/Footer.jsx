import { HashLink as Link } from 'react-router-hash-link';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer__MainContainer'>
            <div className='row'>
                <div className='col-lg-6 order-lg-1 order-1 footer__Data-Container'>
                    <ul className='footer__List'>
                        <li>
                            <a href='mailto:ventas@gumatsrl.com'>
                               <p className='footer__Data-Item'>ventas@gumatsrl.com</p>
                            </a>                            
                        </li>
                        <li>
                            <p className='footer__Data-Item'>
                                + 54 11 3943 3311
                            </p>
                            <p className='footer__Data-Item'>
                                + 54 11 3341 2690
                            </p>
                        </li>
                        <li>
                            <p className='footer__Data-Item'>
                                San Pedro 4025, CABA CP: 1407 Buenos Aires, Argentina
                            </p>
                        </li>
                    </ul>
                </div>

                
                <div className='col-lg-6 order-lg-2 order-2 footer__Sitemap-Container'>
                        <ul className='footer__List'>
                            <li>
                                <Link to='#Header' className='footer__Sitemap-Link'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='#About' className='footer__Sitemap-Link'>Nosotros</Link>
                            </li>
                            <li>
                                <Link to='#Pilars' className='footer__Sitemap-Link'>Pilares</Link>
                            </li>
                            <li>
                                <Link to='#Products' className='footer__Sitemap-Link'>Productos</Link>
                            </li>
                            <li>
                                <Link to='#Contact' className='footer__Sitemap-Link'>Contacto</Link>
                            </li>
                        </ul>
                </div>                
            </div>    
            <div className='row footer__Copyright-Container'>
                    <p className='footer__Copyright'>© Gumat.com.ar Todos los Derechos Reservados. </p>                
                </div>        
        </div>
    )
}

export default Footer