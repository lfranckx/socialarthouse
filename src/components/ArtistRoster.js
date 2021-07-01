import React from 'react';

import andi from '../images/artists/andi.png';
import bri from '../images/artists/bri.png';
import chita from '../images/artists/chita.png';
import drew from '../images/artists/drew.jpg';
import jikaiah from '../images/artists/jikaiah.jpeg';
import johnny from '../images/artists/johnny.jpg';
import lala from '../images/artists/lala.png';
import laura from '../images/artists/laura.png';
import leysa from '../images/artists/leysa.png';
import michelle from '../images/artists/michelle.jpg';
import minkim from '../images/artists/minkim.jpg';
import rolando from '../images/artists/rolando.jpg';
import shelley from '../images/artists/shelley.jpg';
import sydney from '../images/artists/sydney.jpeg';
import tippi from '../images/artists/tippi.jpg';


export default function ArtistRoster(props) {
    return (
        <>
            <section id="artists">
                <h3>Our Artist Collective</h3>
                <div className='grid'>
                    <div><img className="thumbnail" src={johnny} alt="johnny-ramirez"/></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </>
    )
}