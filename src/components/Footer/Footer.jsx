import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import './footer.css'

const Footer = () => {

    const { t } = useTranslation()
    
    return (
        <div className='footer__MainContainer'>
            <div className='row'>
                <div className='col-lg-6 order-lg-1 order-1 footer__Data-Container'>
                    <ul className='footer__List'>
                        <li className='footer__Data-Item-Container'>

                            <a href='mailto:ventas@gumatsrl.com' className='footer__Data-Item'>                                
                                <i className="bi bi-envelope"></i> ventas@gumatsrl.com
                            </a>                            
                        </li>
                        <li className='footer__Data-Item'>
                            <p className='footer__Data-Item'>
                                <i className="bi bi-telephone"></i>  + 54 11 3943 3311
                            </p>
                            <p className='footer__Data-Item'>
                                <i className="bi bi-telephone"></i> + 54 11 3341 2690
                            </p>
                        </li>
                        <li className='footer__Data-Item'>
                            <p className='footer__Data-Item'>
                                <i className="bi bi-geo-alt"></i> San Pedro 4025, CABA CP: 1407 Buenos Aires, Argentina
                            </p>
                        </li>
                    </ul>
                </div>

                
                <div className='col-lg-6 order-lg-2 order-2 footer__Sitemap-Container'>
                        <ul className='footer__List'>
                            <li>
                                <Link to='#Header' className='footer__Sitemap-Link'>{t('inicio')}</Link>
                            </li>
                            <li>
                                <Link to='#About' className='footer__Sitemap-Link'>{t('nosotros')}</Link>
                            </li>
                            <li>
                                <Link to='#Pilars' className='footer__Sitemap-Link'>{t('pilares')}</Link>
                            </li>
                            <li>
                                <Link to='#Products' className='footer__Sitemap-Link'>{t('productos')}</Link>
                            </li>
                            <li>
                                <Link to='#Contact' className='footer__Sitemap-Link'>{t('contacto')}</Link>
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