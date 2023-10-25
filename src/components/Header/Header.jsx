import './header.css';
import carousel1 from '../../assets/header/caorusel1.jpg';
import carousel2 from '../../assets/header/caorusel2.jpg';
import carousel3 from '../../assets/header/caorusel3.jpg';


const Header = () => {
    return (
        <div className='header__Container'>
           <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100 carousel__Img" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className='header__Carousel-Title'>
                                    First slide label
                                </h3>
                                <h5 className='header__Carousel-Subtitle'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </h5>
                                <p className='header__Carousel-Text'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100 carousel__Img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                                <h3 className='header__Carousel-Title'>
                                    Second slide label
                                </h3>
                                <h5 className='header__Carousel-Subtitle'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </h5>
                                <p className='header__Carousel-Text'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100 carousel__Img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                                <h3 className='header__Carousel-Title'>
                                    Third slide label
                                </h3>
                                <h5 className='header__Carousel-Subtitle'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </h5>
                                <p className='header__Carousel-Text'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> 
        </div>
    )
}

export default Header;