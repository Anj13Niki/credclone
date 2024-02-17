import React, { useState } from 'react';
import './MobileScroll.css';
import ScreenText from './ScreenText';

const scrollData = [
    {
        id:1,
        heading:'we’ve got your back.',
        descp:'gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.',
        img:'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png'
    },
    {
        id:2,
        heading:'begin your winning streak.',
        descp:'use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.',
        img:'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png'
    },
    {
        id:3,
        heading:'for your electric taste',
        descp:'get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.',
        img:'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png'
    },
    {
        id:4,
        heading:'more cash in your pockets.',
        descp:'switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.',
        img:'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png'
    }
]

const MobileScroll = () => {
  const [currimg,setcurrimg] = useState(0);
  return (
    <div className='mobile-scroll flex max-width'>
      <div className='scroll-fullscreen-wrapper'>
        {scrollData.map((screen,i)=>{
            return(
                <div className='fullscreen'>
                <ScreenText screen={screen} i={i} setcurrImage={setcurrimg}/>
            </div>
            )
            
        })}
      </div>
      <div className='mobile-fullscreen non-mobile'>
      <div className='mobile-screens'>
        <div className='mobile-mockup-screen flex absolute-center'>
            <img src={scrollData[currimg].img} alt='mobile-screensimg' className='mobile-screen-image slide-right'
                key={scrollData[currimg].id}
            />
        </div>
      </div>
      </div>
    </div>
  )
}

export default MobileScroll
