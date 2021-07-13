import React from 'react';
import { Link } from 'react-router-dom';
import Team from './Team';

export default function Contact(props) {
    return (
        <>
            <section id={props.id}>
                <h3>Need to Connect?</h3>
                <div >
                    <Link className="btn-big" to="/contact">Schedule a Call</Link>
                </div>
            </section>

            <Team id="team" />
        </>
    )
}