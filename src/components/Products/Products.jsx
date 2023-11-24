import './products.css';
import ProductCard from './components/ProductCard';
import potencia from '../../assets/products/potencia.jpg';
import lineales from '../../assets/products/lineales.jpg';
import automotriz from '../../assets/products/automotriz.jpg';
import horticultura from '../../assets/products/horticultura.jpg';
import driver from '../../assets/products/driver.jpg'
import { useTranslation } from 'react-i18next';



const Products = () => {

    const { t } = useTranslation();

    return (
        <>
        <div id='Products' className='products__MainContainer'>
            <div className='products__Title-Container'>
                <h1 className='products__Title'>
                    {t('productos')}
                </h1>
            </div>
            
            <div className='products__CardContainer'>
                    <div className='row products__Card-Line'>
                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={potencia}
                            title={t('MPTitle')}
                            text={t('MPText')}
                            />
                        </div>

                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                          <ProductCard 
                            imageUrl={lineales}
                            title={t('MLTitle')}
                            text={t('MLText')}
                            />
                        </div>
                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={automotriz}
                            title={t('MATitle')}
                            text={t('MAText')}
                            />
                        </div>
                    </div>
                    <div className='row products__Card-Line'>

                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={horticultura}
                            title={t('MHTitle')}
                            text={t('MHText')}
                            />
                        </div>
                        <div className='col-xl-4 col-md-6 col-lg-6 products__Card-Self-Container'>
                            <ProductCard 
                            imageUrl={driver}
                            title={t('DLTitle')}
                            text={t('DLText')}
                            />
                    </div>

                    </div>
                    
                
                
                
                
                
            </div>
            
            
        </div>
            
        </>
    )
}

export default Products