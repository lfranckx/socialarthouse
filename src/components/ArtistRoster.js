import React, { Component } from 'react';
import '../styles/ArtistRoster.scss';
import Cards from './Cards';

export default class ArtistRoster extends Component {
    render () {

        return (
            <>
                <section id="artists">
                    <h3>Our Artist Collective</h3>
                    <div className='grid'>
                        <Cards />
                    </div>                    
                </section>
            </>
        )
    }
}