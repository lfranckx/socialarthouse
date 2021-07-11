import React from 'react';
import '../styles/Homepage.scss';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import About from './About';
import Services from './Services';
import Contact from './Contact';
import Partners from './Partners';
import ArtistRoster from './ArtistRoster';

export default function Homepage(props) {
    return (
        <div id="homepage">
            <header>
                <h2>Build Your Dream</h2>
                <h3>We Offer an Expansive Consulting Experience for Brands Through <span>Ingenuity, Originality, and Imagination</span></h3>
                
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                    <i class="fas fa-chevron-down bounce"></i>
                </Link>
            </header>

            <main>
                <About id="about"/>
                <Services id="services"/>
                <Contact id="contact"/>
                <Partners id="partners"/>
                <ArtistRoster id="artists"/>
            </main>
        </div>
    );
}