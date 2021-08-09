import React from 'react';
import { Link } from 'react-scroll';
import '../styles/ArtistRoster.scss';
import ArtistCards from './ArtistCards';
import Masonry from 'react-masonry-component';

export default function ArtistRoster() {
    return (
        <section id='artists'>
            <div className='grid'>
                {
                    ArtistCards.map((card, i) => {
                        console.log(card.src);
                        return (
                            <a  key={i}
                                href={card.url}
                                target="_blank" 
                                rel="noopener noreferrer">
                                <div className="grid-item">
                                    <div className="image">
                                        <img src={card.src} alt="artist headshot" />
                                    </div>
                                    <div className="text-container">
                                        <h4>{card.name}</h4>
                                        <h4>{card.ig}</h4>
                                    </div>
                                    <div className="overlay"></div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <Link className="btn" activeClass="active" to="navbar" spy={true} smooth={true} offset={0} duration={500}>Back to top</Link>
        </section>
    ) 
}