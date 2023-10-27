import './products.css';
import ProductCard from './components/ProductCard';
import potencia from '../../assets/products/potencia.jpg';
import lineales from '../../assets/products/lineales.jpg';
import automotriz from '../../assets/products/automotriz.jpg';
import horticultura from '../../assets/products/horticultura.jpg';

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
                <div className='row'>
                    <div className='col-xl-3 col-md-6 col-lg-6 products__Card-Self-Container'>
                        <ProductCard 
                        imageUrl={potencia}
                        title={"Potencia"}
                        text={"Acá va el texto"}
                        />
                    </div>

                    <div className='col-xl-3 col-md-6 col-lg-6 products__Card-Self-Container'>
                      <ProductCard 
                        imageUrl={lineales}
                        title={"Lineales"}
                        text={"Acá va el texto"}
                        />
                    </div>
                    <div className='col-xl-3 col-md-6 col-lg-6 products__Card-Self-Container'>
                        <ProductCard 
                        imageUrl={automotriz}
                        title={"Automotriz"}
                        text={"Acá va el texto"}
                        />
                    </div>
                    <div className='col-xl-3 col-md-6 col-lg-6 products__Card-Self-Container'>
                        <ProductCard 
                        imageUrl={horticultura}
                        title={"Horticultura"}
                        text={"Acá va el texto"}
                        />
                    </div>
                </div>
                
                
                
                
            </div>
            
            
        </div>
            
        </>
    )
}

export default Products