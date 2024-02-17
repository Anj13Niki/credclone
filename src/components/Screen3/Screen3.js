import React from 'react';
import Button from '../ReusableComponents/Button/Button';
import './Screen3.css'
const Screen3 = () => {
  return (
    <div className='security photo-section'>
    <div className='max-width'>
        <div className='photo-section-child'>
            <div className='photo-section-top'></div>
            <div className='photo-section-bottom'>
                <div className='photo-section-heading'>
                security first.
                and second.
                </div>
                <div className='security-subheading'>
                what’s yours remains only yours.
                </div>
                <div className='photo-section-desc'>
                never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.
                </div>
                <div className='photo-section-btn'>
                    <Button buttonText="Become a member" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Screen3
