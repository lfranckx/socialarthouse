import React from 'react';
import { useEffect } from 'react';
import '../styles/Homepage.scss';

import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Partners from './Partners';
import ArtistRoster from './ArtistRoster';

export default function Homepage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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