import './partnersCard.css'


const PartrnersCard = ({ imageUrl, title }) => {
    return (
        <div className='partnersCard__Main-Container'>
            <div className='partnersCard__Img-Container'>
                <img src={imageUrl} className='partnersCard__Img'/>
            </div>
            <div className='partnersCard__Title-Container'>
                <h2 className='partnersCard__Title'>{title}</h2>
            </div>
        </div>
    )
}

export default PartrnersCard