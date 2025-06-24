import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
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
            <form>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter you name'
                required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number'
                required/>
                <label>Write your mressages here</label>
                <textarea name='message' id='' rows='6' placeholder='Enter your message'
                required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=''/></button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact