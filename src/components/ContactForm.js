import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSpring, animated } from 'react-spring';
import emailjs from 'emailjs-com';

import '../styles/ContactForm.scss';

const ContactForm = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const history = useHistory();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_lfs5csq', 'template_qhm0n59', e.target, 'user_4ZnH44kohKcJmQhnL2VGX')
            .then(res => {
                history.push('/thankyou');
            })
            .catch(err => console.log(err));
    }

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return(
        <main> 
            <animated.div style={props} id="contact-form">
                <div className='container'>
                    <h2>Get in Touch</h2>
                    <h3>Expansive Consulting Experience for Brands through ingenuity, originality, and imagination</h3>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="label">
                        <label htmlFor="name"></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your Name'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="salon"></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="salon"
                            placeholder='Your Salon'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="email"></label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="phone"></label>
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='Your Phone Number'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="website"></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="website"
                            placeholder='Your Website or Instagram'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="message"></label>
                    </div>

                    <div>
                        <textarea 
                            name='message' 
                            rows='10' 
                            placeholder="Describe how you would like to work with us"
                        />
                    </div>
                    
                    <button className="btn" type="submit">
                        Send
                    </button>
                </form>
            </animated.div>
        </main>
    )
}

export default ContactForm;