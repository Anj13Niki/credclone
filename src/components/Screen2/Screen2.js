import React from 'react';
import Button from '../ReusableComponents/Button/Button';
import './Screen2.css'

const Screen2 = () => {
    return (
        <div className='feel-special1 photo-section'>
            <div className='max-width'>
                <div className='photo-section-child'>
                    <div className='photo-section-top'></div>
                    <div className='photo-section-bottom'>
                        <div className='screen-heading'>
                            we take your money matters seriously.
                        </div>
                        <div className='sub-screen-subheading'>
                        so that you don’t have to.
                        </div>
                        <div className='photo-section-desc'>
                        never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.
                        </div>
                        <div className='photo-section-btn'>
                            <Button buttonText="Experience the upgrade" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen2
