import './contact.css';
import Logo from '../../assets/logo_Gumat.png';


const Contact = () => {
    return (
        <div id='Contact' className='contact__MainContainer'>
            <div className='contact__Title-Container'>
                <h1 className='contact__Title'>CONTACTO</h1>
            </div>
            <div className='contact__Form-Container'>

                <div className='form__Input-Container'>
                
                <form>

                    <div className='row'>
                        <div className='col-lg-6 order-lg-1 order-2'>
                                    <div className="mb-3">
                                        <input 
                                        type="text" 
                                        className="form-control form__Input" 
                                        id="name"                             
                                        placeholder='Nombre'                            
                                        />
                                        <input 
                                        type="text" 
                                        className="form-control form__Input" 
                                        id="lastName"                             
                                        placeholder='Apellido'                            
                                        />
                                        <input 
                                        type="email" 
                                        className="form-control form__Input" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Email'                            
                                        />
                                        <input 
                                        type="number" 
                                        className="form-control form__Input" 
                                        id="tel"                             
                                        placeholder='Teléfono'                            
                                        />
                                        <input 
                                        type="text" 
                                        className="form-control form__Input" 
                                        id="subject"                             
                                        placeholder='Asunto'                            
                                        />
                                    </div>
                        </div>
                        <div className='col-lg-6 order-lg-2 order-1 form__Logo-Container'>
                            <img src={Logo} className='form__Logo' alt='Gumat Logo'/>
                        </div>                   
                    
                    </div>
                    <div className='row'>
                        <div className='col-12 order-3'>
                            <div className="mb-3">
                                <textarea className="form-control form__Input-Message" 
                                    id="exampleFormControlTextarea1"                                 
                                    rows='3'
                                    placeholder='Mensaje'>
                                </textarea>
                            </div>
                        </div>
                    </div>    
                        <div className='form__Btn-Container'>
                            <button type="submit" className="btn form__Btn">
                                Enviar
                            </button>
                        </div>
                        
                </form>

                </div>

                
                
            </div>

        </div>
    )
}

export default Contact