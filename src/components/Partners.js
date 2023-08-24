import React from 'react';
import '../styles/Partners.scss';
import { useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import dyson from '../images/partners/dyson.png';
import ulta from '../images/partners/ulta.png';
import loreal from '../images/partners/loreal.png';
import redken from '../images/partners/redken.png';
import bumble from '../images/partners/bab.png';
import ker from '../images/partners/kerastase.png';
import matrix from '../images/partners/matrix.png';
import bqg from '../images/partners/bqg_logo.png';
import milady from '../images/partners/miladypro.png';
import bio from '../images/partners/Bioionic.png';
import ouidad from '../images/partners/ouidad.png';
import joico from '../images/partners/joico.png';
import johnny from '../images/partners/johnny-ramirez.png';
import gene from '../images/partners/genejuarez.png';
import leysa from '../images/partners/leysa-crop.png';
import keune from '../images/partners/keune.png';
import fromm from '../images/partners/fromm.png';
import cuvee from '../images/partners/cuvee.png';
import pro from '../images/partners/provalliance.png';

export default function Partners(props) {
    const [isOpen, setIsOpen] = useState(false);
    const collapsibleRef = useRef();

    return (
        <section id="partners">
            <h3>Our Brand Partners</h3>
            <div className="container">
                <div>
                    <a href="https://www.dyson.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={dyson} alt="dyson" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ulta.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={ulta} alt="ulta-beauty" />
                    </a>
                </div>
                <div>
                    <a href="https://us.lorealprofessionnel.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={loreal} alt="loreal-professional" />
                    </a>
                </div>
                <div>
                    <a href="https://www.redken.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={redken} alt="redken" />
                    </a>
                </div>
                <div>
                    <a href="https://www.bumbleandbumble.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={bumble} alt="bumble-and-bumble" />
                    </a>
                </div>
                <div>
                    <a href="https://www.kerastase-usa.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={ker} alt="kerastase-paris" />
                    </a>
                </div>
                
            </div>
            <div 
                ref={collapsibleRef} 
                style={isOpen 
                    ? {
                        height: collapsibleRef.current.scrollHeight + 'px',
                    } : {
                        height: '0px',
                        margin: '0px auto'
                    }}
                className={"content"}>
                <div>
                    <a href="https://www.matrix.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={matrix} alt="matrix" />
                    </a>
                </div>
                <div>
                    <a href="https://www.beautyquestgroup.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={bqg} alt="bqg-logo" />
                    </a> 
                </div>
                <div>
                    <a href="https://www.miladypro.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={milady} alt="milady-pro" />
                    </a>
                </div>
                <div>
                    <a href="https://www.bioionic.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={bio} alt="bio-ionic" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ouidad.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={ouidad} alt="ouidad" />
                    </a>
                </div>
                <div>
                    <a href="https://www.joico.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={joico} alt="joico" />
                    </a>
                </div>
                <div>
                    <a href="https://johnnyramirez.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={johnny} alt="johnny-ramirez-california" />
                    </a>
                </div>
                <div>
                    <a href="https://www.genejuarez.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={gene} alt="gene-juarez" />
                    </a>
                </div>
                <div>
                    <a href="https://forevercurlsbyleysa.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={leysa} alt="leysa-carillo" />
                    </a>
                </div>
                <div>
                    <a href="https://www.keune.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={keune} alt="keune-hair-cosmetics" />
                    </a>
                </div>
                <div>
                    <a href='https://frommbeauty.com/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={fromm} alt="fromm" />
                    </a>
                </div>
                <div>
                    <a href="https://www.cuveebeauty.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={cuvee} alt="cuvee-beauty" />
                    </a>
                </div>
                <div></div>
                <div>
                    <a href="https://www.groupe-provalliance.com/fr/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={pro} alt="provalliance" />
                    </a>
                </div>
            </div>
                        
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'And More' }
                { !isOpen && <span><i id="partners-down-arrow" className="fas fa-chevron-down bounce"></i></span> }
            </button>
        </section>
    );
}