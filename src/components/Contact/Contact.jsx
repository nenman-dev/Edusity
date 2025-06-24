import React, { useRef, useEffect,useState } from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
const [state, handleSubmit] = useForm("myzjbgne");
const formRef = useRef(null);

const [statusMessage, setStatusMessage] = useState(""); 

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      setStatusMessage("E-mail sent successfully!!");
        formRef.current.reset();
    

      const timeout = setTimeout(() => {
        setStatusMessage('');
      }, 3000);

      return () => clearTimeout(timeout);
    }

    if (!state.succeeded && state.errors && state.errors.length > 0) {
      setStatusMessage("Something went wrong. Please try again.");
    }
  }, [state]);


return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src= {msg_icon} alt=''/></h3>
            <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions and suggestion are important to us as we strive to provide excpetional service to our university community. </p>
            <ul>
                <li><img src={mail_icon} alt=''/>Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt=''/>+1 123-456-7890</li>
                <li><img src={location_icon} alt=''/>77 Massachusetts Ave, Cambridge <br/> MA 02139,United States </li>
            </ul>
        </div>
        <div className='contact-col'>
            <form ref={formRef} onSubmit={handleSubmit}> 
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name'
                required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number'
                required/>
                <label>Write your messages here</label>
                <textarea name='message' id='' rows='6' placeholder='Enter your message'
                required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=''/></button>
            </form>
           <span className="form-status">
                {state.submitting && "Sending..."}
                {statusMessage && <div>{statusMessage}</div>}
                {!state.submitting && !state.succeeded && state.errors && state.errors.length > 0 && (
                    <div className="error-message">
                    {state.errors.map((error, index) => (
                        <div key={index}>{error.message}</div>
                    ))}
                    </div>
                )}
            </span>

        </div>
    </div>
  )
}

export default Contact