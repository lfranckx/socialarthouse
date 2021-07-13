import React from 'react';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';

import '../styles/ContactForm.scss';

const ContactForm = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_lfs5csq', 'template_qhm0n59', e.target, 'user_4ZnH44kohKcJmQhnL2VGX')
            .then(res => {console.log(res)})
            .catch(err => console.log(err));
    }

    return(
        <main>
            <div id='contact-form'>
                <h2>Contact</h2>

                <form onSubmit={sendEmail}>

                            <div className="label">
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="first_name"
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="last_name"
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="message">Message</label>
                            </div>

                            <div>
                                <textarea name='message' rows='10' />
                            </div>
                            
                            <button className="btn" type="submit">
                                Send
                            </button>
                        </form>
            </div>
        </main>
    )
}

export default ContactForm;