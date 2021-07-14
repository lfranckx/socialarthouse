import React from 'react';
import '../styles/Partners.scss';
import { useState, useRef } from 'react';

import bab from '../images/partners/bab.png';
import dyson from '../images/partners/dyson.png';
import kerastase from '../images/partners/kerastase.png';
import loreal from '../images/partners/loreal.png';
import redken from '../images/partners/redken.png';
import ulta from '../images/partners/ulta.png';
import bioionic from '../images/partners/Bioionic.png';
import bqg from '../images/partners/bqg_logo.png';
import cuvee from '../images/partners/cuvee.png';
import fromm from '../images/partners/fromm.png';
import genejuarez from '../images/partners/genejuarez.png';
import joico from '../images/partners/joico.png';
import johnny from '../images/partners/johnny-ramirez.png';
import kuene from '../images/partners/keune.png';
import matrix from '../images/partners/matrix.png';
import miladypro from '../images/partners/miladypro.png';
import provalliance from '../images/partners/provalliance.png';

export default function Partners(props) {
    const [isOpen, setIsOpen] = useState(false);
    const collapsibleRef = useRef();

    return (
        <section id="partners">
            <h3>Our Brand Partners</h3>
            <div className="container">
                <a href="https://www.dyson.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={dyson} alt="dyson" />
                </a>
                <a href="https://www.ulta.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={ulta} alt="ulta-beauty" />
                </a>
                <a href="https://us.lorealprofessionnel.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={loreal} alt="loreal-professional" />
                </a>
                <a href="https://www.redken.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={redken} alt="redken" />
                </a>
                <a href="https://www.bumbleandbumble.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={bab} alt="bumble-and-bumble" />
                </a>
                <a href="https://www.kerastase-usa.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={kerastase} alt="kerastase-paris" />
                </a>
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
                <a href="https://www.matrix.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={matrix} alt="matrix" />
                </a>
                <a href="https://www.beautyquestgroup.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={bqg} alt="bqg-logo" />
                </a>
                <a href="https://www.miladypro.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={miladypro} alt="milady-pro" />
                </a>
                <a href="https://www.bioionic.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={bioionic} alt="bio-ionic" />
                </a>
                <a href="https://www.joico.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={joico} alt="joico" />
                </a>
                <a href="https://www.keune.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={kuene} alt="keune-hair-cosmetics" />
                </a>
                <a href="https://johnnyramirez.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={johnny} alt="johnny-ramirez-california" />
                </a>
                <a href="https://www.genejuarez.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={genejuarez} alt="gene-juarez" />
                </a>
                <a href='https://frommbeauty.com/' target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={fromm} alt="fromm" />
                </a>
                <a href="https://www.cuveebeauty.com/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={cuvee} alt="cuvee-beauty" />
                </a>
                <a href="https://www.groupe-provalliance.com/fr/" target="_blank" rel="noopener noreferrer">
                    <img className="partner-logo" src={provalliance} alt="provalliance" />
                </a>
            </div>
                        
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'And More' }
                { !isOpen && <span><i id="partners-down-arrow" className="fas fa-chevron-down bounce"></i></span> }
            </button>
        </section>
    );
}