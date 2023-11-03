import './contact.css';
import Logo from '../../assets/logo_Gumat.png';
import { useState } from "react";






const Contact = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    

const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setLastName('');
    setEmail('');
    setTel('');
    setSubject('');
    setMessage('');
            
}

    return (
        <div id='Contact' className='contact__MainContainer'>
            <div className='contact__Title-Container'>
                <h1 className='contact__Title'>CONTACTO</h1>
            </div>
            <div className='contact__Form-Container'>

                <div className='form__Input-Container'>
                
                <form onSubmit={handleSubmit}>

                    <div className='row'>
                        <div className='col-lg-6 order-lg-1 order-2'>
                                    <div className="mb-3">
                                        <input                                         
                                        type="text" 
                                        className="form-control form__Input" 
                                        id="name"                             
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Nombre'
                                        required                            
                                        />
                                        <input 
                                        type="text" 
                                        className="form-control form__Input" 
                                        id="lastName"                             
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder='Apellido'
                                        required                            
                                        />
                                        <input 
                                        type="email" 
                                        className="form-control form__Input" 
                                        id="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-describedby="emailHelp" 
                                        placeholder='Email'
                                        required                            
                                        />
                                        <input 
                                        type="number" 
                                        className="form-control form__Input" 
                                        id="tel"              
                                        value={tel}              
                                        onChange={(e) => setTel(e.target.value)} 
                                        placeholder='Teléfono'
                                        required                            
                                        />
                                        <input 
                                        type="text" 
                                        className="form-control form__Input" 
                                        id="subject"                             
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder='Asunto'
                                        required                            
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
                                    id="message"                                 
                                    rows='3'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='Mensaje'
                                    required
                                    >
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