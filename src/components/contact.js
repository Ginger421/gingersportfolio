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
    <section>

      <div className="container">

        <h2 className="--text-center">
          Contact
        </h2>

        
        <form ref={form}
        onSubmit={sendEmail} 
        justifyContent="center"> 

          <input type='text'
          placeholder="Name"
          name="user-name"
          required />

          <input type="email"
          placeholder="Email"
          name="user-email"
          required />

          <input type="text"
          placeholder="Subject"
          name="subject"
          required />

          <textarea name="message"
          required></textarea>

          <button type="submit" className="--btn --btn-primary">
            Submit
          </button>

        </form>

      </div>

    </section> //end section
  );
}

export default Contact
