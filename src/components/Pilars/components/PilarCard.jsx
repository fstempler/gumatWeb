import './pilarCard.css'

const PilarCard = ({ imageUrl, text }) => {    

    return (
        <div className="card mb-1 pilarCard__Container" >
            <div className="row g-0">
                    <div className="col-md-4 pilarCard__Img-Container">
                        <img src={imageUrl} className="img-fluid rounded-start pilarCard__Img" alt="..."/>
                    </div>
                <div className="col-md-8">
                    <div className="card-body">                        
                        <p className="card-text pilarCard__Text">{text}</p>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PilarCard