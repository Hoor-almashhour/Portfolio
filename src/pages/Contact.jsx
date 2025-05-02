import './Contact.css'
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";


const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <span style={{ color: '#7DE0EA' }}>Contact</span>
        <h1>Let's Discuss Your <strong style={{ color: '#7DE0EA' }}> Project</strong></h1>
        <div className="contact-content">
          <div className="contact-info">
            <div className='contact-call'>
              <div className='phone-icon'>
                <FiPhone />
              </div>
              <div className='number'>
                <span>Call me:</span> 
                <p> +905069727741</p>
              </div>
            </div>
            <div className='contact-email'>
              <div className='email-icon'>
                <HiOutlineMail />
              </div>
              <div className='email'>
                <span>Email me:</span> 
                <p> houralmashhour@gmail.com</p>
              </div>
            </div>
            <div className='contact-address'>
              <div className='address-icon'>
                <LuMapPin />
              </div>
              <div className='address'>
                <span>Address:</span> 
                <p>Turkey, Istanbul</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className='inputs'>
              <div className='fullname'>
                  <input type="text" placeholder="Full name" required />
              </div>
              <div className='email'>
                  <input type="email" placeholder="Your email" required />
              </div>
            </div>
          
            <input type="tel" placeholder="Phone number" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
    </section>
    </>
  )
}

export default Contact
