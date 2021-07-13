import React from 'react';
import { Link } from 'react-scroll';

export default function Header(props) {
    return (
        <header id="header">
            <h2>Build Your Dream</h2>
            <h3>We Offer an Expansive Consulting Experience for Brands Through <span>Ingenuity, Originality, and Imagination</span></h3>
            
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                <i className="fas fa-chevron-down bounce"></i>
            </Link>
        </header>
    )
}