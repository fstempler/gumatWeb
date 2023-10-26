import './partners.css';
import PartnersCard from './components/PartnersCard';
import Shell_logo from '../../assets/partners/Shell_logo.png' 

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
                    imageUrl={Shell_logo}
                    title={"Shell"}
                    />
                    <PartnersCard
                    imageUrl={Shell_logo}
                    title={"Shell"}
                    />
                    <PartnersCard
                    imageUrl={Shell_logo}
                    title={"Shell"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Partners