import './pilars.css';
import PilarCard from './components/PilarCard';
import clasificacion from '../../assets/pilars/clasificacion.png';
import idea from '../../assets/pilars/idea.png';
import planeta from '../../assets/pilars/el-planeta-tierra.png';
import fabrica from '../../assets/pilars/fabrica.png';
import secreto from '../../assets/pilars/secreto.png';
import { useTranslation } from 'react-i18next';

const Pilars = () => {

    const { t } = useTranslation();

    return (
        
        <div id='Pilars' className='pilars__MainContainer'>
            <div className='pilars__Title-Container'>
                <h1 className='pilars__Title'>{t('pilares')}</h1>
            </div>
            <div className="pilars__Cards-Container">
                <div className='pilars__Container container'>
                    <PilarCard imageUrl={clasificacion} 
                        text={t('pilar1')}
                    />    
                    <PilarCard imageUrl={idea} 
                        text={t('pilar2')}
                    />    
                    <PilarCard imageUrl={planeta} 
                        text={t('pilar3')}
                    />
                    <PilarCard imageUrl={fabrica} 
                        text={t('pilar4')}
                    />
                    <PilarCard imageUrl={secreto} 
                        text={t('pilar5')}
                    />
                </div>
            </div>
            
            

        </div>
        
        
    )
};

export default Pilars