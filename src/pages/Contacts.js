import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './../styles/contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_pk55xjl',
        'template_uegf3eh',
        { name: formData.name, from_email: formData.email, message: formData.message },
        'NSp5LSumUOF3aT0P5'
      )
      .then(
        (response) => {
          console.log('Correct sending of the letter', response);
          setIsEmailSent(true);
        },
        (error) => {
          console.error('Error sending of the letter', error);
          console.error('EmailJSResponseStatus:', error?.status);
        }
      );
  };

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Poznan, Poland</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+48575194012">+48 575 194 012</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2"> Contact me</h2>
          </li>
        </ul>

        <div className="Cont">
          <form className="Cont-form" onSubmit={handleSubmit}>
            <label htmlFor="name"> Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

            <button type="submit">Send</button>
          </form>
        </div>

        {isEmailSent && (
          <div className="success-popup">
            <p>Message has been sent successfully!</p>
            <button onClick={() => setIsEmailSent(false)}>Close</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Contacts;