import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../images/sah-footer-logo.png';

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

                        <div>
                            <p>Lynn</p>
                            <a href="mailto:lynn@socialarthouse.com" className="email"
                                rel="noopener noreferrer">Lynn@socialarthouse.com</a>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <p className='state'>New York</p>
                            <p>Maria</p>
                            <a href="mailto:maria@socialarthouse.com" className="email"
                                rel="noopener noreferrer">Maria@socialarthouse.com</a>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <p className="state">Arkansas</p>
                            <p>Lachlan</p>
                            <a href="mailto:lachlan@socialarthouse.com" className="email"
                                rel="noopener noreferrer">Lachlan@socialarthouse.com</a>
                        </div>
                    </div>
                </div>
                

                <div className="right">
                    <div>
                        <p>We are the house of incredible creative solutions</p>
                        <div className="cb-container">
                            <Link className="contact-btn" to='/contact'>Get in Touch</Link>
                        </div>

                        <div className="link-wrap">
                            <Link className="link" to='/privacy-policy'>Privacy Policy</Link>
                        </div>
                        
                        <div>
                            <Link to='/'>
                                <img className="logo" src={logo} alt="Social Art House"/>
                            </Link>
                        </div>
                        <div id='copyright'><small>Website designed &amp; developed by <a href='https://lfxmedia.io' rel='noreferrer' target='_blank'>LFX Media</a></small></div>
                        <div id='copyright'><small>Copyright © 2021. All rights reserved.</small></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}