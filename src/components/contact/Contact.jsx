import React from 'react'
import './contact.css'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mdrqalx', 'template_9ore1hv', form.current, 'LJJ7ln5skY5EXaZLm')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id= 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>viennguyen.280202</h5>
            <h5>@gmail.com</h5>
            <a href="mailto:viennguyen.280202@gmail.com">Send a email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vien Nguyen</h5>
            <a href="https://m.me/VienNg02">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Call</h4>
            <h5>0941296714</h5>
            <a href="https://api.whatsapp.com/send?phone=0941296714">Contact Me</a>
          </article>
        </div>
        <form ref= {form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact