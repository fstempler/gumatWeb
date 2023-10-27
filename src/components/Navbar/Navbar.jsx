import './navbar.css';
import logo  from '../../assets/logo_Gumat.png';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {         
   

    return (
        
        <div className='navbar__container'>

{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#About">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
            <nav className="navbar navbar-expand-lg navbar-dark mbg-body-transparent navbar-fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand logoContainer" to="#Header" smooth><img className="logo" src={logo}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse buttons__Container" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" data-bs-target=".navbar-collapse.show" aria-current="page" to="#About" smooth>NOSOTROS</Link>
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
                                PILARES                                
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
                                PRODUCTOS
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
                                CONTACTO
                                </Link>
                            </li>                            
                            <li className="nav-item">
                                <div className='nav__LanguageBtn-Container'>
                                    <Link 
                                    className="nav-link active nav__Btn" 
                                    // data-bs-toggle="collapse" 
                                    data-bs-target=".navbar-collapse.show" 
                                    aria-current="page" to="#" smooth
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
        
    )
}

export default Navbar