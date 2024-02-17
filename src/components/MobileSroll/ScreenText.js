import React from 'react';
import { useState,useEffect,useRef } from 'react';

const ScreenText = ({screen,i,setcurrImage}) => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef();
    
    const toggleAimation=(e)=>{
        if(e[0].isIntersecting){
            setShowAnimation(true);
            setcurrImage(i)
        }
    };
    const options={
        root:null,
        rootMargin:"0px",
        threshold:0.6
    }
   
    useEffect(()=>{
        const observer = new IntersectionObserver(toggleAimation,options);

        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }
        return()=>observer.unobserve(ref.current);
    },[])
  return (
    <div className={`screen-text ${showAnimation?"text-visible":""}`} ref={ref}>
      <div className='screen-heading'>
        {screen.heading}
      </div>
      <div className='mobile-fullscreen only-mobile'>
      <div className='mobile-screens'>
        <div className='mobile-mockup-screen flex absolute-center'>
            <img src={screen.img} alt='mobile-screensimg' className='mobile-screen-image'/>
        </div>
      </div>
      </div>
      <div className='screen-description'>{screen.descp}</div>
    </div>
  )
}

export default ScreenText
