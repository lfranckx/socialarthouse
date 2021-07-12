import React from 'react';
import '../styles/Homepage.scss';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Partners from './Partners';
import ArtistRoster from './ArtistRoster';

export default function Homepage(props) {
    return (
        <div id="homepage">
            <Header id={props.id}/>
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