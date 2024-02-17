import React from 'react'
import Hero from './components/HeroSection/Hero';
import Header from './components/Header/Header';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import FeelSpecial from './components/FeelSprcial/FeelSpecial';
import Brands from './components/BrndsLove/Brands';
import WindowPeek from './components/WindowPeak/WindowPeek';
import MobileScroll from './components/MobileSroll/MobileScroll';
import Screen2 from './components/Screen2/Screen2';
import Screen3 from './components/Screen3/Screen3';
import CredStory from './components/CredStory/CredStory';
import Footer from './components/Foooter/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <ProductShowcase/>
            <FeelSpecial/>
            <Brands/>
            <Screen2/>
            <MobileScroll/>
            <WindowPeek/>
            <Screen3/>
            <CredStory/>
            <Footer/>
        </>
    )
}

export default Home
