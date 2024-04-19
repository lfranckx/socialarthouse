import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Helmet } from 'react-helmet';
import * as emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../styles/ContactPage.scss';

const ContactForm = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const navigate = useNavigate();
    const [buttonState, handleButtonState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const submitForm = (values) => {
        handleButtonState('Sending...');
        const newValues = {
            email: values.email,
            message: values.message,
            name: values.name,
            phone: values.phone,
            website: values.website,
            salon: values.salon,
            reply_to: values.email
        };

        try {
            emailjs.send("service_lfs5csq", "template_qhm0n59", newValues, "user_4ZnH44kohKcJmQhnL2VGX")
            .then(res => {
                    handleButtonState('Sent');
                    handleButtonDisabled(true);
                    navigate('/thankyou');
                }
            )
        } catch (error) {
            handleMessage(error.message);
        }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* This is not an email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(20, '* Phone number is too long').required("* Required"),
        message: Yup.string().min(2, "* Message is too short").max(1000, "* 1000 maximum characters").required("* Required"),
        website: Yup.string().min(2, "* Sorry, this is too short").max(50, "* 50 maximum characters"),
        salon: Yup.string().min(2, "* Salon name is too short").max(20, "* 20 maximum characters")
    });

    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

    return(
        <>
            <Helmet >
                <title>Contact Social Art House | Beauty &amp; Hair Creative Agency</title>
                <meta name='description' content="Reach out to Social Art House, your creative agency for beauty and hair industry collaborations. Contact us today to elevate your brand's presence."/>
            </Helmet>
            <main> 
                <animated.div style={props} id="contact-form">
                    <div className='container'>
                        <h2>Get in Touch</h2>
                        <h3>Expansive Consulting Experience for Brands through ingenuity, originality, and imagination</h3>
                    </div>

                    <Formik
                        initialValues={{ name: "", email: "", phone: "", message: "", website: "", salon: "" }} 
                        validationSchema={contactFormSchema}
                        onSubmit={submitForm}
                    >
                        <Form>
                            <div className="label">
                                <label htmlFor="name"></label>
                            </div>
                            <div>
                                <Field
                                    name="name"
                                    placeholder='Your Name'
                                />
                            </div>
                            <div>
                                <ErrorMessage component="div" className='error' name='name' />
                            </div>

                            <div className="label">
                                <label htmlFor="salon"></label>
                            </div>
                            <div>
                                <Field
                                    name="salon"
                                    placeholder='Your Salon'
                                />
                            </div>
                            <div>
                                <ErrorMessage component="div" className='error' name='salon' />
                            </div>

                            <div className="label">
                                <label htmlFor="email"></label>
                            </div>
                            <div>
                                <Field
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <ErrorMessage component="div" className='error' name='email' />
                            </div>

                            <div className="label">
                                <label htmlFor="phone"></label>
                            </div>
                            <div>
                                <Field
                                    name="phone"
                                    placeholder='Your Phone Number'
                                />
                            </div>
                            <div>
                                <ErrorMessage component="div" className='error' name='phone' />
                            </div>

                            <div className="label">
                                <label htmlFor="website"></label>
                            </div>
                            <div>
                                <Field
                                    name="website"
                                    placeholder='Your Website or Instagram'
                                />
                            </div>
                            <div>
                                <ErrorMessage component="div" className='error' name='website' />
                            </div>

                            <div className="label">
                                <label htmlFor="message"></label>
                            </div>

                            <div>
                                <Field 
                                    as='textarea'
                                    name='message' 
                                    rows='10' 
                                    placeholder="Describe how you would like to work with us"
                                />
                            </div>
                            <div>
                                <ErrorMessage component="div" className='error' name='message' />
                            </div>
                            
                            <button className="btn" type="submit" disabled={buttonDisabled}>
                                {buttonState}
                            </button>
                        </Form>
                    </Formik>
                    
                    {message && <div className='message'>{message}</div>}
                </animated.div>
            </main>
        </>
    );
}

export default ContactForm;