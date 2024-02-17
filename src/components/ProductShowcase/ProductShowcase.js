import React, { useEffect, useRef, useState } from 'react';
import './ProductShowcase.css'

const ProductShowcase = () => {

    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef();
    
    const toggleAimation=(e)=>{
        if(e[0].isIntersecting){
            setShowAnimation(true);
        }
    };
    const options={
        root:null,
        rootMargin:"0px",
        threshold:0.5
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
    <div className={`product-showcase ${showAnimation?"scale-up-bottom":""}`} ref={ref}>
      {showAnimation && 
        <div className='showcase-wrapper'>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png' className='showcase-ui showcase-img-1' alt='img1'/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png' className='showcase-ui showcase-img-2' alt='img2'/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png' className='showcase-ui showcase-img-3' alt='img3'/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png' className='showcase-ui showcase-img-4' alt='img4'/>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png' className='showcase-ui showcase-img-5' alt='imh5'/>
      </div>
      }
    </div>
  )
}

export default ProductShowcase
