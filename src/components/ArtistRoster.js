import React, { Component } from 'react';
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

export default class ArtistRoster extends Component {
    render () {
        return (
            <section id="artists">
                <h3>Our Artist Collective</h3>
                <div className='grid'>
                    <a href="https://www.instagram.com/johnnyramirez/"
                        target="_blank" rel="noopener noreferrer">
                        <div className="grid-item">
                            <div className="image">
                                <img src={johnny} alt="johnny-ramirez" />
                            </div>
                            <div className="text-container">
                                <h4>Johnny Ramirez</h4>
                                <h4>@johnnyramirez</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/lalasupdos/"
                        target="_blank" rel="noopener noreferrer">
                        <div className="grid-item">
                            <div className="image" >
                                <img src={lala} alt="lala-chihala" />
                            </div>
                            <div className="text-container">
                                <h4>Lala Chihala</h4>
                                <h4>@lalasupdos</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <div><div className='tan fill'></div></div>

                    <a href="https://www.instagram.com/michelleoconnorbeauty/"
                        target="_blank" rel="noopener noreferrer">
                        <div className="grid-item">
                            <div className="image">
                                <img src={michelle} alt="michelle-oconnor" />
                            </div>
                            <div className="text-container">
                                <h4>Michelle O'Connor</h4>
                                <h4>@michelleoconnorbeauty</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <div><div className='tan fill'></div></div>

                    <a href="https://www.instagram.com/manemystic/"
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={bri} alt="bri-bird" />
                            </div>
                            <div className="text-container">
                                <h4>Bri Bird</h4>
                                <h4>@manemystic</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <div><div className='tan fill'></div></div>

                    <a href="https://www.instagram.com/ramontgarcia/"
                        target="_blank" rel="noopener noreferrer">
                        <div className="grid-item">
                            <div className="image">
                                <img src={ramon} alt="ramon-garcia" />
                            </div>
                            <div className="text-container">
                                <h4>Ramon Garcia</h4>
                                <h4>@RamonTGarcia</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <div><div className='light-brown fill'></div></div>

                    <a href="https://www.instagram.com/crown_works/"
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={andi} alt="andi-scarbrough" />
                            </div>
                            <div className="text-container">
                                <h4>Andi Scarbrough</h4> 
                                <h4>@Crown_Works</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>            
                    </a>
                    <div><div className='tan fill'></div></div>

                    <a href='https://www.instagram.com/chitabeseau/'
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={chita} alt="chita-beseau" />
                            </div>
                            <div className="text-container">
                                <h4>Chita Beseau</h4>
                                <h4>@ChitaBeseau</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/leysahairandmakeup/"
                        target="_blank" rel="noopener noreferrer">
                        <div className="grid-item">
                            <div className="image">
                                <img src={leysa} alt="leysa-carillo" />
                            </div>
                            <div className="text-container">
                                <h4>Leysa Carrillo</h4>
                                <h4>@LeysaHairAndMakeup</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <div><div className='brown fill'></div></div>

                    <a href="https://www.instagram.com/tippishorter/"
                        target="_blank" rel="noopener noreferrer">
                        <div className="grid-item">
                            <div className="image">
                                <img src={tippi} alt="tippi-shorter" />
                            </div>
                            <div className="text-container">
                                <h4>Tippi Shorter</h4>
                                <h4>@Tippishoertrank</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/sydneyannlopezhair/"
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={sydney} alt="sydney-lopez" />
                            </div>
                            <div className="text-container">
                                <h4>Sydney Lopez</h4>
                                <h4>@sydneyannlopezhair</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <div><div className='brown fill'></div></div>
                    <div><div className='black fill'></div></div>

                    <a href="https://www.instagram.com/shelleygregoryhair/"
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={shelley} alt="shelley-gregory" />
                            </div>
                            <div className="text-container">
                                <h4>Shelley Gregory</h4>
                                <h4>@ShelleyGregoryHair</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/minkimcolorist/"
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={minkim} alt="min-kim" />
                            </div>
                            <div className="text-container">
                                <h4>Min Kim</h4>
                                <h4>@minkimcolorist</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/drewschaefering/"
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={drew} alt="drew-schaefering" />
                            </div>
                            <div className="text-container">
                                <h4>Drew Schaefering</h4>
                                <h4>@drewschaefering</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/rolandoaqui/"
                        target="_blank" rel="noopener noreferrer">
                        <div className='grid-item'>
                            <div className="image">
                                <img src={rolando} alt="rolando-aqui" />
                            </div>
                            <div className="text-container">
                                <h4>Rolando Aqui</h4>
                                <h4>@rolandoaqui</h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </a>
                </div>                    
            </section>
        )
    }
}