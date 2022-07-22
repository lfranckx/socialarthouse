import React from 'react';
import { Link } from 'react-scroll';
import '../styles/ArtistRoster.scss';
import ArtistCards from './ArtistCards';
import Masonry from 'react-masonry-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useForceUpdate } from '@react-spring/shared';

export default function ArtistRoster() {

    const masonryOptions = {
        transitionDuration: 0,
        fitWidth: true,
    };

    const children = ArtistCards.map((card, i) => {

        if (card.name === 'block') {
            return (
                <>
                </>
            )
        }

        else return (
            <li className="card" key={i}>
                <a href={card.url}
                    target="_blank" 
                    rel="noopener noreferrer">
                    <div className="wrap">
                        <div className="image-wrap">
                            <LazyLoadImage 
                                effect="blur" 
                                placeholderSrc='https://socialarthouse.s3.us-east-2.amazonaws.com/Artists/Placeholder-pink-1000.png'
                                src={card.src}
                                alt={card.name}
                            />
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
            <h3 className='section_title'>Artists</h3>
            <Masonry
                className={'my-gallery-class masonry'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                onImagesLoaded={useForceUpdate()}
            > 
                {children}
            </Masonry>
            <div className='btn-wrap'>
                <Link className="btn" activeClass="active" to="navbar" spy={true} smooth={true} offset={0} duration={500}>Back to top</Link>
            </div>
        </section>
    ) 
}