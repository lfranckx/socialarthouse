import React from 'react';
import { useEffect } from 'react';
import '../styles/Homepage.scss';

import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Partners from '../components/Partners';
import ArtistRoster from '../components/ArtistRoster';

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