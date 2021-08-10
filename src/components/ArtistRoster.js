import React from 'react';
import { Link } from 'react-scroll';
import '../styles/ArtistRoster.scss';
import ArtistCards from './ArtistCards';
import Masonry from 'react-masonry-component';

export default function ArtistRoster() {
    const masonryOptions = {
        transitionDuration: 0
    };

    const children = ArtistCards.map((card, i) => {
        return (
            <li class="card" key={i}>
                <a href={card.url}
                    target="_blank" 
                    rel="noopener noreferrer">
                    <div className="wrap">
                        <div className="image-wrap">
                            <img src={card.src} alt="artist headshot" />
                        </div>
                        <div className="text-wrap">
                            <h4>{card.name}</h4>
                            <h4>{card.ig}</h4>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </a>
            </li>
        )
    })

    return (
        <section id='artists'>
            <ul>
                {/* <Masonry */}
                    // className={'my-gallery-class masonry'} // default ''
                    // elementType={'ul'} // default 'div'
                    // options={masonryOptions} // default {}
                    // disableImagesLoaded={false} // default false
                    // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                {/* >  */}
                    {children}
                {/* </Masonry> */}
            </ul>
            <Link className="btn" activeClass="active" to="navbar" spy={true} smooth={true} offset={0} duration={500}>Back to top</Link>
        </section>
    ) 
}