import './productCard.css'

const ProductCard = ({ imageUrl, text, title }) => {
    return (
        //style="width: 18rem;
        <div className='productCard__MainContainer'>
            <div className="card text-bg-dark productCard__Container">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body productCard__Data-Container">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">
                        {text}
                    </p>    
                </div>
            </div>
        </div>
    )
}

export default ProductCard