import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/ThankYou.scss';

export default function ThankYou() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <main>
            <animated.div style={props} id="thankyou">
                <h2 className='h1'>Thank you for contacting us. A member of our team will be in touch soon.</h2>
                <animated.div style={props}>
                    <h3>&#8220;Become Your Dream&#8221; - De La Vega</h3>
                </animated.div>
            </animated.div>
        </main>
    )
}