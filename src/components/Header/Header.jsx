import './header.css'
import bgVideo from '../../assets/header/VID-6.mp4'
// import { useTransition } from 'react'
import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t } = useTranslation();

    return (
       <div className='header__MainContainer' id='Header'>
            <div className='header__Overlay'></div>
                <video src={bgVideo} className='header__Video'autoPlay loop muted playsInline alt="Gumat video fábrica"/>
                <div className='header__Text-Container'>
                    <h1 className='header__Title'>{t('headerTitle')}</h1>                    
                </div>            
       </div>
    )
}

export default Header