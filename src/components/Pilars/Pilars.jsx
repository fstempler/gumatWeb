import './pilars.css';
import PilarCard from './components/PilarCard';
import clasificacion from '../../assets/pilars/clasificacion.png';
import idea from '../../assets/pilars/idea.png';
import planeta from '../../assets/pilars/el-planeta-tierra.png';
import fabrica from '../../assets/pilars/fabrica.png';
import secreto from '../../assets/pilars/secreto.png';

const Pilars = () => {
    return (
        <>
        <div className='pilars__MainContainer'>
            <div className='pilars__Title-Container'>
                <h1 className='pilars__Title'>PILARES</h1>
            </div>
            <div className="pilars__Cards-Container">
                <div className='pilars__Container container'>
                    <PilarCard imageUrl={clasificacion} 
                        text={"RELACIÓN CON EL CLIENTE Y SU SATISFACCIÓN"}
                    />    
                    <PilarCard imageUrl={idea} 
                        text={"INNOVACIÓN PERMANENTE ANTE EL CAMBIO CONSTANTE"}
                    />    
                    <PilarCard imageUrl={planeta} 
                        text={"CONCIENCIA EN LA SUSTENTABILIDAD"}
                    />
                    <PilarCard imageUrl={fabrica} 
                        text={"AYUDAR A LOS FABRICANTES, ENSAMBLADORES Y DESARROLLADORES NACIONALES"}
                    />
                    <PilarCard imageUrl={secreto} 
                        text={"DISCRECIÓN EN EL MANEJO DE INFORMACIÓN TÉCNICA DEL CLIENTE"}
                    />
                </div>
            </div>
            
            

        </div>
        
        </>
    )
};

export default Pilars