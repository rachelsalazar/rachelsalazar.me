import { useState } from 'react';
import "./contact.scss";
import { send } from 'emailjs-com';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import keys from '../../env/config/keys';

export default function Contact() {

    const [submitEmail, setSubmitEmail] = useState(false);
    const [message, setMessage] = useState("Please send me a message if you'd like to connect!");
    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: 'Rachel',
      message: '',
      reply_to: '',
    });

    const handleSubmit = (e) => {
      e.preventDefault();

      setSubmitEmail(true);
      setMessage("Thank you for your message! I'll email you back ASAP :)")

      send(
        keys.serviceID,
        keys.templateID,
        toSend,
        keys.userID
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    }

    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    let today = new Date();
    let year = today.getFullYear();

    return (
      <div className="contact" id="contact">
        <h1>Contact ✍🏼</h1>
        <p>{message}</p>
        {submitEmail ? 
          ""
          :
          <form onSubmit={handleSubmit}>
            <input type="text" name="from_name" placeholder="Name" value={toSend.from_name} onChange={handleChange}/>
            <input type="text" name= "reply_to" placeholder="Email" value={toSend.reply_to} onChange={handleChange} />
            <textarea type="text" name="message" placeholder="Message" value={toSend.message} onChange={handleChange}></textarea>
            <button type="submit">S E N D</button>
          </form>
        }
        <footer>
          <div class="icons">
            <a href="https://www.linkedin.com/in/rachel-e-salazar/" target="blank"><LinkedInIcon /></a>
            <a href="https://twitter.com/rach_e_l_" target="blank"><TwitterIcon /></a>
            <a href="https://github.com/rachelsalazar" target="blank"><GitHubIcon /></a>
          </div>
          <div className="copyright">Rachel Salazar | {year} </div>
        </footer>
      </div>
    )
}
