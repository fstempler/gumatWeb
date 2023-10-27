import './navbar.css';
import logo  from '../../assets/logo_Gumat.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {    

    return (
        <>
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
                                <Link className="nav-link active nav__Btn" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" aria-current="page" to="#ClientsReviews" smooth 
                                >
                                <span className='link__Style'>
                                    NOSOTROS
                                </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active nav__Btn" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" aria-current="page" to="#Faq" smooth
                                >
                                <span className='link__Style'>
                                    PILARES
                                </span>    
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active nav__Btn" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" aria-current="page" to="#Solutions" smooth
                                >
                                <span className='link__Style'>
                                    PRODUCTOS
                                </span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active nav__Btn" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" aria-current="page" to="#About" smooth
                                >
                                <span className='link__Style'>
                                    CONTACTO
                                </span></Link>
                            </li>                            
                            <li className="nav-item">
                                <div className='nav__LanguageBtn-Container'>
                                    <Link 
                                    className="nav-link active nav__Btn" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target=".navbar-collapse.show" 
                                    aria-current="page" to="#About" smooth
                                    >
                                    <i className="bi bi-toggle-on link__Style"></i>    
                                    <span className='LanguageBtn'>
                                        EN
                                    </span>
                                    </Link>
                                </div>                                
                            </li>                            
                        </ul>                        
                    </div>
                    
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar