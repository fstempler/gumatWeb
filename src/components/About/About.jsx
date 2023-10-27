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
                            GUMAT produce y comercializa Soluciones Led y Componentes
                            Auxiliares para los Fabricantes de diversos rubros de la Industria
                            como Alumbrado Público, Industrial, Automotriz y Cenefas
                            Comerciales.

                            Cuenta con cuatro líneas de Electrónica de montaje SMD y con un
                            Departamento de Investigación & Desarrollo dinámico, que le permite
                            delinear una amplia gama de productos estándar y a medida, para
                            cubrir los requerimientos de cada Cliente, teniendo en cuenta las
                            nuevas tendencias en materia de componentes, avance en
                            electrónica y principalmente el formato que van adoptando los
                            principales fabricantes de lentes y ópticas.

                            GUMAT bajo un formato OEM, entiende que es un eslabón en la
                            Cadena Industrial, realizando productos para todo aquel que fabrica
                            con o sin Marca, brindando soluciones tecnológicas que promueven
                            el desarrollo de la Industria Nacional, potenciando el crecimiento sus
                            clientes y el propio, a través de ellos.
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