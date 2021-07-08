import React from 'react';
import '../styles/ArtistRoster.scss';

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
import ramon from '../images/artists/ramon.png';
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
                    <div><img className="thumbnail" src={johnny} alt="johnny-ramirez" /></div>
                    <div><div className="tan fill"></div></div>
                    <div><img className="thumbnail" src={leysa} alt="leysa-carillo" /></div>
                    <div><div className="black fill"></div></div>
                    
                    <div><img className="thumbnail" src={lala} alt="lala-chihala" /></div>
                    <div><img className="thumbnail" src={ramon} alt="ramon-garcia" /></div>
                    <div><img className="thumbnail" src={laura} alt="laura-gibson" /></div>
                    <div><div className="light-brown fill"></div></div>
                    
                    <div><div className='brown fill'></div></div>
                    <div><img className="thumbnail" src={michelle} alt="michelle-oconnor" /></div>
                    <div><div className="black fill"></div></div>
                    <div><img className="thumbnail" src={tippi} alt="tippi-shorter" /></div>
                    
                    <div><img className="thumbnail" src={drew} alt="drew-schaefering" /></div>
                    <div><div className="tan fill"></div></div>
                    <div><img className="thumbnail" src={chita} alt="chita-beseau" /></div>
                    <div><img className="thumbnail" src={sydney} alt="sydney" /></div>
                    
                    <div><img className="thumbnail" src={rolando} alt="rolando-aqui" /></div>
                    <div><img className="thumbnail" src={andi} alt="andi-scarbrough" /></div>
                    <div><div className="tan fill"></div></div>
                    <div><img className="thumbnail" src={shelley} alt="shelley-gregory" /></div>
                    
                    <div><img className="thumbnail" src={bri} alt="bri-bird" /></div>
                    <div><div className='brown fill'></div></div>
                    <div><div className="black fill"></div></div>
                    <div><img className="thumbnail" src={minkim} alt="min-kim" /></div>
                </div>
            </section>
        </>
    )
}