import { useState } from 'react';
import "./contact.scss";

export default function Contact() {

    const [submitEmail, setSubmitEmail] = useState(false);
    const [message, setMessage] = useState("Please send me a message if you'd like to connect!");

    const handleSubmit = (e) => {
      e.preventDefault();

      setSubmitEmail(true);
      setMessage("Thank you for your message! I'll get back to you ASAP :)")
    }

    return (
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <p>{message}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">{submitEmail ? "S E N T" : "S E N D"}</button>
        </form>
      </div>
    )
}
