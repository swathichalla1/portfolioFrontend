import React, { useState } from 'react';

import './index.css';

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
    

  const handleChangeName = (e) => {
    setName(e.target.value );
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value );
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value );
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    let result = await fetch('https://portfoliobackend-i24x.onrender.com/',{
            method:'post',
            body:JSON.stringify({name,email,number,message}),
            headers:{
                'content-Type' :'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem('user',JSON.stringify(result));
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
  };

  return (
    <section id="Contact" className="contactContainer">
      <p className="para">Get in Touch</p>
      <h1 className="Heading">Contact Me</h1>
      <div className="contact-info-upper-container">
        <form className="contact-details-container" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className='inputs-container'>
              <div >
                <label>
                  <input className="contact-container" type="text" name="name" placeholder="Name" value={name} onChange={handleChangeName} />
                </label>
                <br />
                <label>
                  <input className="contact-container" placeholder="Email" type="email" name="email" value={email} onChange={handleChangeEmail} />
                </label>
                <br />
                <label>
                  <input className="contact-container" placeholder="Phone Number" type="tel" name="number" value={number} onChange={handleChangeNumber} />
                </label>
                <br />
              </div>
              <div>
                <textarea className="contact-container txt" placeholder="    Message" name="message" value={message} onChange={handleChangeMessage} />
              </div>
            </div>

            
          </div>
          <div className='bottom-btn-email-container'>
            <button type="submit" className="submitButton">Submit</button>
            
          </div>
        </form>
      </div>
</section>
      
  );
};

export default ContactMe