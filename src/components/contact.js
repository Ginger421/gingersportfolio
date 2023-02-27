//import { Email, Subject } from "@mui/icons-material";
//import './Contact.css'
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef ()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uoq36ll', 'template_4w7eija', form.current, 'KWtmXSLXL94ViPMiV')
      .then((result) => {
          console.log(result.text);
          alert("Thank you, your email was sent!")
      }, (error) => {
          console.log(error.text);
          alert("Error!")
      }
      
      );
      e.target.reset()
  };

  return (
    <section className="email-card">

      <div className="container"> 

        <h2 className="--text-center">
          Contact Me
        </h2>

        <p className="contact-p">
          I'd love to hear from you! Please use the contact form below to get in touch!
        </p>

        
        <form ref={form}
        onSubmit={sendEmail} 
        justifyContent="center"> 

          <ul className="ul-input">

            <li>
              <input 
              className="email-form"
              type='text'
              placeholder="Name"
              name="user-name"
              required />
            </li>


            <li>
              <input 
              className="email-form"
              type="email"
              placeholder="Email"
              name="user-email"
              required />
            </li>

            <li>
              <input 
              className="email-form"
              type="text"
              placeholder="Subject"
              name="subject"
              required />
            </li>

            <li className="button">
              <button type="submit" className="--btn --btn-primary">
                Send
              </button>
            </li>
            
          </ul>

          

          <textarea 
          name="message"
          cols={40} 
          rows={20}
          required></textarea>

          

        </form>

      </div>

    </section> //end section
  );
}

export default Contact
