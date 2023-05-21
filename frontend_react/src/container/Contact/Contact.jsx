import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_r8ywzar', 'template_okrr24r', form.current, 'Sc_R6Dg6U40KOpF6C')
          .then((result) => {
              console.log(result.text);
              if(result.text ==='OK'){
                toast.success('Email is sent successfully');
              }

          }, (error) => {
              console.log(error.text);
          });
      }
  return (
    <>
    <div class="container mt-5 mb-5">
      <div class="row">
      <div class="col mt-5">

<h3 class="mb-5">Get in touch</h3>
<p class="ml-5">Email: merlin.fitness@gmail.com</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>

        <div class="col mt-5 mb-5 mt-5 mb-5 p-2 bg-black bg-gradient bg-opacity-25  shadow p-3 mb-5  rounded">

          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
                name='message'
              ></textarea>
            </div>

            <button type="submit" value="Send" class="btn btn-dark mt-3 mb-3">
              Submit
            </button>
          </form>
        </div>


      </div>

    </div>

</>
  )

}

export default Contact
