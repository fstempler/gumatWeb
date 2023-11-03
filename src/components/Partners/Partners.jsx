import './partners.css';
import PartnersCard from './components/PartnersCard';
import cree from '../../assets/partners/cree.png' 
import honglitronic from '../../assets/partners/honglitronic.png' 
import infineon from '../../assets/partners/infineon.png' 
import lifud from '../../assets/partners/lifud.png' 
import microchip from '../../assets/partners/microchip.png' 
import onsemi from '../../assets/partners/onsemi.png' 
import samsung from '../../assets/partners/samsung.png' 
import sosen from '../../assets/partners/sosen.png' 

const Partners = () => {
    return (
        <div className='partners__MainContainer'>
            <div className='partners__Title-Container'>
                <h1 className='partners__Title'>
                    PARTNERS
                </h1>
            </div>
            <div className='partners__Card-Main-Container'>
                <div className='partners__CardContainer'>
                    <PartnersCard
                    imageUrl={samsung}
                    title={""}
                    />
                    <PartnersCard
                    imageUrl={honglitronic}
                    title={""}
                    />
                    <PartnersCard
                    imageUrl={cree}
                    title={""}
                    />
                    <PartnersCard
                    imageUrl={sosen}
                    title={""}
                    />
                    <PartnersCard
                    imageUrl={lifud}
                    title={""}
                    />
                    <PartnersCard
                    imageUrl={microchip}
                    title={""}
                    />
                    <PartnersCard
                    imageUrl={onsemi}
                    title={""}
                    />
                    <PartnersCard
                    imageUrl={infineon}
                    title={""}
                    />
                </div>
            </div>
        </div>
    )
}

export default Partners