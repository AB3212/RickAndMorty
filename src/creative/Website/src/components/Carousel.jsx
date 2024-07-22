import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowRight , FaArrowLeft } from "react-icons/fa6";


const Carousel = () => {
    const options = {
        margin: 5,
        responsiveClass: true,
        nav: true,
        dots: false,    
        loop:true,
        autoplay: true,
        navText: [<FaArrowRight  className='text-dark'/>, <FaArrowLeft />],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 3,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 1,
    
            }
        },
    };
    return (
        <div>
            <OwlCarousel className='owl-theme' nav {...options}>
                <div className='item'><img src={require('../img/asset 1.webp')} alt="" /></div>
                <div className='item'><img src={require('../img/asset 2.webp')} alt="" /></div>
                <div className='item'><img src={require('../img/asset 3.webp')} alt="" /></div>
                <div className='item'><img src={require('../img/asset 4.webp')} alt="" /></div>
                <div className='item'><img src={require('../img/asset 5.webp')} alt="" /></div>
            </OwlCarousel>;
        </div>
    )
}

export default Carousel




