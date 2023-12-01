import './header.css'
import bgVideo from '../../assets/header/VID-6.mp4'
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const Header = () => {

    const { t } = useTranslation();

    const videoRef = useRef(null);

    useEffect(() => {
        const playVideo = () => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        };

        // Puedes llamar a playVideo después de algún evento de usuario
        // o después de un tiempo específico (por ejemplo, después de 1 segundo).
        setTimeout(playVideo, 1000);
    }, []);

    return (
       <div className='header__MainContainer' id='Header'>
            <div className='header__Overlay'></div>
                <video src={bgVideo} ref={videoRef} className='header__Video'autoPlay loop muted playsInline alt="Gumat video fábrica" data-wf-ignore="true" />
                <div className='header__Text-Container'>
                    <h1 className='header__Title'>{t('headerTitle')}</h1>                    
                </div>            
       </div>
    )
}

export default Header