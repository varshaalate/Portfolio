import React, { useState } from 'react';
import './contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle change for each input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Create form data to send to the API
    const formDataObj = new FormData(event.target);

    console.log(formDataObj)
    formDataObj.append("access_key", "39c70613-3869-49c3-8ac5-b72c8ffb2fcd");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        alert(res.message);

        // Clear the form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  
  const isFormEmpty = !formData.name && !formData.email;
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Thank you for visiting my portfolio! I am currently exploring new career opportunities and am excited to connect with professionals and potential employers. If you are interested in discussing how my skills and experiences align with your team's needs, I would love to have a conversation.</p>

          <p>Whether you have a job opening, project, or just want to network, please feel free to reach out.Let's connect and explore how we can work together. I am open to full-time positions, freelance opportunities.</p>
          <div className="contact-details">
            <div className="contactdetail">
              <img src={mail} alt="Mail" />
              <p>varshaalate86@gmail.com</p>
            </div>
            <div className="contactdetail">
              <img src={call} alt="Call" />
              <p>(+91) 7262823787</p>
            </div>
            <div className="contactdetail">
              <img src={location} alt="Location" />
              <p>Kolhapur</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder='Enter Your Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder='Enter Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Write Your Message</label>
          <textarea
            name="message"
            rows='8'
            placeholder='Enter Your Message'
            value={formData.message}
            onChange={handleChange}
          />
          <button type='submit'  disabled={isFormEmpty} className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
