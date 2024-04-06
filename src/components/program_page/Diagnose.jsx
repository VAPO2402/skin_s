import React, { useRef } from 'react'
import Header from '../main_page/Header'

import "../../styles/styles_program/diagnose.scss"
import emailjs from '@emailjs/browser';

const Diagnose = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sznr43k', 'template_8iidebq', form.current, {
        publicKey: 'MkMcdsR0dQJY-SeYd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("The diagnosis is complete!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Having trouble while diagnosing.");
        },
      );
  };

  return (
    <section className="diagnose">
      <Header />
      <div className="diagnoseContent">
        <div className="diagnoseInfo">
          <h1>The future <br /><span>of health</span></h1>
          <p>Tremendous potential for advancements in personalised <br /> medicine, digial health, integrated <br /> healthcare, and improvement patient outcome.</p>
        </div>
        <div className="diagnoseMain">
          <form ref={form} onSubmit={sendEmail}>
            <h1>Diagnose and Fix appointment</h1>
            <p>Enter the diagnosis details below:-</p>
            <div className="formSubmit">
              <input type="text" placeholder='Full name' name='userName' />
              <input type="number" placeholder='Mobile Number' name='userNumber' />
              <input type="email" placeholder='Email' name='userEmail' />
              <button> + Upload Image</button>
              <textarea name="Enter Symptoms" cols="28" rows="3" placeholder='Enter Symptoms'></textarea>
              <input type="submit" value="Send" className='submit' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Diagnose