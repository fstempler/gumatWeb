import './navbar.css';
import logo  from '../../assets/logo_Gumat.png';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';


const Navbar = () => {         
   const { t, i18n } = useTranslation();

   const changeLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

    return (
        
        <div className='navbar__container'>
            <nav className="navbar navbar-expand-lg navbar-dark mbg-body-transparent navbar-fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand logoContainer" to="#Header" smooth><img className="logo" src={logo}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse buttons__Container" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link 
                                className="nav-link active nav__Btn" 
                                data-bs-target=".navbar-collapse.show" 
                                aria-current="page" 
                                to="#About" 
                                smooth>
                                {t('nosotros')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link active nav__Btn" 
                                // data-bs-toggle="collapse" 
                                data-bs-target=".navbar-collapse.show" 
                                aria-current="page" 
                                to="#Pilars" 
                                smooth
                                >
                                {t('pilares')}                        
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link active nav__Btn" 
                                // data-bs-toggle="collapse" 
                                data-bs-target=".navbar-collapse.show" 
                                aria-current="page" 
                                to="#Products" 
                                smooth
                                >
                                {t('productos')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link active nav__Btn" 
                                // data-bs-toggle="collapse" 
                                data-bs-target=".navbar-collapse.show" 
                                aria-current="page" 
                                to="#Contact" 
                                smooth
                                >
                                {t('contacto')}
                                </Link>
                            </li>                            
                            <li className="nav-item">
                                <div className='nav__LanguageBtn-Container'>
                                <button className="nav-link active nav__Btn" onClick={changeLanguage}>
                                    <i className={`bi bi-toggle-${i18n.language === 'es' ? 'on' : 'off'} link__Style`}></i>
                                    <span className='LanguageBtn'>
                                        {t('languageButton')}
                                    </span>
                                </button>
                                </div>                                
                            </li>                            
                        </ul>                        
                    </div>
                    
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar