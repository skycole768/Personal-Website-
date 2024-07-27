import Navbar from "./Navbar";
import '../styles/contact.css';
import React, { useState } from 'react';
import Link from '../images/Link.webp'
import Mail from '../images/Mail.png'
import emailjs from 'emailjs-com';

function Contact(props) {


  const [status, setStatus] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      reply_to: formData.email, // Corresponds to {{reply_to}}
      from_name: formData.name, // Corresponds to {{from_name}}
      message: formData.message, // Corresponds to {{message}}
      to_email: 'skyler_coleman123@hotmail.com',
    };

    emailjs.send('service_aaktvjg', 'template_lhkdc28', templateParams, '1AxYERWBD5NWtU_gV')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          setStatus('success');
      }, (error) => {
          console.error('There was an error sending the email:', error.text);
          setStatus('error');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
    return (
      <div className="Contact">
        <Navbar/>
        <div className="contactHeadWrapper">
        <h1 className="contactHeader">Get in Touch</h1>
        </div>
        <div className="grid">
          <div className="contactColumn1">
            <div className="mail">
            <img src = {Mail} alt = "mail" className="contactItem"/>
            <div className="mailWrapper">
              <a className="mailItem" href="mailto:Spc69655@uga.edu">Spc69655@uga.edu</a>
              <a className="mailItem" href="mailto:Skyler_coleman123@hotmail.com" >Skyler_coleman123@hotmail.com</a>
            </div>
          </div>
          <div className="LinkedIn">
          <img src = {Link} alt = "Linkedin" className="contactItem"/>
          <a className="linkItem" href="https://www.linkedin.com/in/skyler-coleman-16b417238" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/skyler-coleman-16b417238</a>
          </div>
          </div>

          <div className="contactColumn2">
            <h3 className="formHeader">Reach Out To Me!</h3>
            <p className="formSubtext">Have a question about my credentials? Interested in my skills? Or just want to Chat? Reach out anytime!</p>

            {status === 'success' ? (
            <div className="success-message" style={{marginTop:'18vh'}}>
              <h3>Message Sent!</h3>
              <p>Your message has been sent successfully. Would you like to send another message?</p>
              <button onClick={() => setStatus('')}>Send Another Message</button>
            </div>
          ) : status === 'error' ? (
            <div className="error-message" style={{marginTop:'18vh'}}>
              <h3>Message Failed</h3>
              <p>There was a problem sending your message. Please try again.</p>
              <button onClick={() => setStatus('')}>Try Again</button>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message"
                  />
                </div>
                
                <button type="submit">Submit</button>
              </form>
              </>
          )}
          </div>
         
        </div>
      </div>
    );
  }
  
  export default Contact;