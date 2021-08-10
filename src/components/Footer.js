import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <div id="footer">
            <footer>
                <div className="left">
                    <div className='column'>
                        <div>
                            <p className="state">California</p>
                            <p>Marlene</p>
                            <a href="mailto:marlene@socialarthouse.com" className="email"
                                rel="noopener noreferrer">Marlene@socialarthouse.com</a>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <p className='state'>New York</p>
                            <p>Courtney</p>
                            <a href="mailto:courtney@socialarthouse.com" className="email"
                                rel="noopener noreferrer">Courtney@socialarthouse.com</a>
                        </div>
                        <div>
                            <p>Maria</p>
                            <a href="mailto:maria@socialarthouse.com" className="email"
                                rel="noopener noreferrer">Maria@socialarthouse.com</a>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <p className="state">Colorado</p>
                            <p>Justine</p>
                            <a href="mailto:justine@socialarthouse.com" className="email"
                                rel="noopener noreferrer">Justine@socialarthouse.com</a>
                        </div>
                    </div>
                </div>
                

                <div className="right">
                    <div>
                        <p>We are the house of incredible creative solutions</p>
                        <div className="cb-container">
                            <Link className="contact-btn" to='/contact'>Get in Touch</Link>
                        </div>
                        <div>
                            <Link to='/'>
                                <img className="logo" src='images/sah-logo.png' alt="SAH-logo"/>
                            </Link>
                        </div>
                        <p id='copyright'>Copyright © 2021. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}