import './products.css';
import ProductCard from './components/ProductCard';
import potencia from '../../assets/products/potencia.jpg';
import lineales from '../../assets/products/lineales.jpg';
import automotriz from '../../assets/products/automotriz.jpg';
import horticultura from '../../assets/products/horticultura.jpg';
import driver from '../../assets/products/driver.jpg'

const Products = () => {
    return (
        <>
        <div id='Products' className='products__MainContainer'>
            <div className='products__Title-Container'>
                <h1 className='products__Title'>
                    PRODUCTOS
                </h1>
            </div>
            
            <div className='products__CardContainer'>
                    <div className='row products__Card-Line'>
                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={potencia}
                            title={"Módulos Potencia"}
                            text={`Para Alumbrado Público, Industrial, Antiexplosivo, Deportivo.
                            PCB: FR4, Metalcore u otro.
                            Con o sin bornera rápida, con salida de cables.
                            Con o sin sensor NTC para comandar el Driver por excesos de Temperatura.
                            Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                            Led: de media, baja y alta potencia.
                            Rango de 2500k a 6500k en blanco y en colores.
                            `}
                            />
                        </div>

                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                          <ProductCard 
                            imageUrl={lineales}
                            title={"Módulos Lineales"}
                            text={`Para Alumbrado Comercial, Antiexplosivo, Señalética.
                            PCB: FR4, Metalcore u otro.
                            Con o sin bornera rápida, con salida de cables.
                            Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                            Led: de media, baja y alta potencia.
                            Rango de 2500k a 6500k en blanco y en colores.
                            `}
                            />
                        </div>
                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={automotriz}
                            title={"Módulos Automotriz"}
                            text={`Para faros delanteros, traseros, laterales, niebla, direccionamiento.
                            PCB: FR4, Metalcore u otro.
                            Con o sin bornera rápida, con salida de cables.
                            12/24vcc, Bi-voltaje
                            Posición, Freno, Baliza, Giro, Luz Cortesía, Patente.
                            Led: de media, baja y alta potencia.
                            Rango de 2500k a 6500k en blanco y en colores.
                            `}
                            />
                        </div>
                    </div>
                    <div className='row products__Card-Line'>

                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={horticultura}
                            title={"Módulos Horticultura"}
                            text={`Para vegetación, floración y cultivos indoor específicos.
                            PCB: FR4, Metalcore u otro.
                            Con o sin bornera rápida, con salida de cables.
                            Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                            Led: de media, baja y alta potencia Horticultura.
                            Rango de 2500k a 6500k en blanco, Rojo, rojo lejano, Azul y UV.
                            `}
                            />
                        </div>
                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={driver}
                            title={"Drivers Led"}
                            text={`Drivers de Corriente Constante para Alumbrado Público e Industrial, on-off, corriente de salida parametrizable, dimerizable.
                            Drivers de Tensión Constante para tiras de Led.
                            `}
                            />
                    </div>

                    </div>
                    
                
                
                
                
                
            </div>
            
            
        </div>
            
        </>
    )
}

export default Products