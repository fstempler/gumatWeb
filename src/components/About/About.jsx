import './about.css';
import video from '../../assets/About/VID-2.mp4';

const About = () => {
    return (
        <>
        <div id='About' className='about__MainContainer'>
            <div className='about__Title-Container'>
                <h1 className='about__Title' >
                    NOSOTROS
                </h1>                
            </div>
            <div className='about__Data-Container'>

            <div className='row'>
                    <div className='col-lg-6 order-lg-1 order-2 about__Text-Container'>
                        
                        <p className='about__Text'>
                        Nos especializamos en el desarrollo y la fabricación de Módulos de Electrónica, Módulos Led y Componentes para Iluminación, Línea Blanca e Industria Automotriz.
                        <br />
                        Ofrecemos una amplia gama de productos orientados a los Fabricantes de Alumbrado Público, Antiexplosivo, Industrial, Automotriz, Comercial, Señalización y Línea Blanca.
                        <br />
                        Contamos con Líneas de montaje electrónico automáticas, un sistema de montaje para trabajos especiales, I+D y un sistema de gestión de calidad a lo largo de todo el proceso productivo.
                        <br />
                        Trabajamos con diferentes Marcas de Led y componentes, con el fin de brindar a los fabricantes y ensambladores, distintas soluciones adecuadas para cada segmento de mercado.
                        <br />
                        Nuestro modelo de trabajo OEM nos lleva a ser un eslabón clave en la Cadena Industrial, proporcionando soluciones tecnológicas competitivas y de vanguardia que permitan promover el desarrollo de la Industria Nacional, a través de nuestros clientes. Gracias al formato de nuestro proceso productivo, somos competitivos tanto en producciones de gran escala como en las pequeñas.

                        </p>
                        
                    </div>
                    <div className='col-lg-6 order-lg-2 order-1 about__Video-Container'>
                        <video src={video} className='about__Video' autoPlay loop muted />
                    </div>
                </div>

            </div>
            
            

        </div>
        </>
    )
}

export default About