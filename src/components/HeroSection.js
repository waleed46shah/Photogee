import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'
function ChadSection() {
    return (
        <div className='hero-container'>
            <video src='videos/video-1.mp4' autoPlay loop muted />
            <h1>FOR PHOTOGENICS</h1>
            <p>ENHANCE YOUR SKILLS</p>
            <div className='hero-btns'>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer
                    <i className='far fa-play-circle'/>
                </Button>
            </div>

        </div>
    )
}

export default ChadSection
