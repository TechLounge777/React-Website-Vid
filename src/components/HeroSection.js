import React from 'react';
import { Button } from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/public/videos/video-2.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btnoutline' buttonSize='btn-large'>GET STARTED</Button>
            </div>
        </div>
    );
}

export default HeroSection;
