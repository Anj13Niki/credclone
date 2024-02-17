import React from 'react';
import './Hero.css'
import Button from '../ReusableComponents/Button/Button';

const Hero = () => {
    return (
        <div className='hero-section-wrapper'>
            <div className='flex absolute-center hero-section flex-col max-width'>
            <div className='hero-heading'>rewards for paying
                credit card bills.</div>
            <div className='hero-subheading'>join 9M+ members who win rewards and cashbacks everyday</div>
            <Button buttonText="Download CRED"/>
            </div>
            
        </div>
    )
}

export default Hero
