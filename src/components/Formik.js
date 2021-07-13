import React from 'react';
import { useEffect } from 'react';
import { Formik } from 'formik';
import '../styles/ContactForm.scss';

const ContactForm = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <div id='contact-form'>
                <h2>Contact Page</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="label">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            
                            <div className="errors">
                                {errors.email && touched.email && errors.email}
                            </div>

                            <div className="label">
                                <label htmlFor="first_name">First Name</label>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="first_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                            
                            <div>
                                <input
                                    type="text"
                                    name="last_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name}
                                />
                            </div>

                            
                            
                            {errors.password && touched.password && errors.password}
                            <button className="btn" type="submit" disabled={isSubmitting}>
                                Send
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </main>
    )
}

export default ContactForm;