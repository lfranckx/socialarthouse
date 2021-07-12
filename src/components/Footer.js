import React from 'react';
import '../styles/Footer.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../images/sah-logo.png'

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
                                target="_blank" rel="noopener noreferrer">Marlene@socialarthouse.com</a>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <p className='state'>New York</p>
                            <p>Courtney</p>
                            <a href="mailto:courtney@socialarthouse.com" className="email"
                                target="_blank" rel="noopener noreferrer">Courtney@socialarthouse.com</a>
                        </div>
                        <div>
                            <p>Maria</p>
                            <a href="mailto:maria@socialarthouse.com" className="email"
                                target="_blank" rel="noopener noreferrer">Maria@socialarthouse.com</a>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <p className="state">Colorado</p>
                            <p>Justine</p>
                            <a href="mailto:justine@socialarthouse.com" className="email"
                                target="_blank" rel="noopener noreferrer">Justine@socialarthouse.com</a>
                        </div>
                    </div>
                </div>
                

                <div className="right">
                    <div>
                        <p>Expansive Consulting Experience for Brands through ingenuity, originality, and imagination</p>
                        <a href="mailto:info@socialarthouse.com" className="email"
                            target="_blank" rel="noopener noreferrer">Info@socialarthouse.com</a>
                        <div>
                            <Link activeClass="active" to="navbar" spy={true} smooth={true} offset={0} duration={500}>
                                <img className="logo" src={logo} alt="SAH-logo"/>
                            </Link>
                        </div>
                        <p id='copyright'>Copyright © 2021. All rights reserved.</p>
                    </div>
                    
                </div>
            </footer>
        </div>
    );
}