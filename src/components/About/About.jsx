import './about.css';
import video from '../../assets/About/VID-2.mp4';
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();

    return (
        <>
        <div id='About' className='about__MainContainer'>
            <div className='about__Title-Container'>
                <h1 className='about__Title' >
                    {t('nosotros')}
                </h1>                
            </div>
            <div className='about__Data-Container'>

                <div className='row'>
                    <div className='col-lg-6 order-lg-1 order-2 about__Text-Container'>
                        <p className='about__Text'>
                            {t('aboutText')}
                        </p>
                    </div>
                    <div className='col-lg-6 order-lg-2 order-1 about__Video-Container'>
                        <video src={video} className='about__Video' autoPlay loop muted alt="Video Led Gumat"/>
                    </div>                  
                    
                </div>

            </div>
            
            

        </div>
        </>
    )
}

export default About