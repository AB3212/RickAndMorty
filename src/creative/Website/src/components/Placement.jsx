import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Placement = () => {
    const options ={
        margin: 5,
        responsiveClass: true,
        nav: false,
        dots: false,    
        loop:true,
        autoplay: true,
        // navText: ["Prev", "Next"],
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
                items:6,
    
            }
        },
    };
    

    return (
        <div className='container mt-5'>
            <div className='text-center mb-5' >
                <h5>STUDENT PLACEMENT</h5>
                <h2>OUR RECRUITMENT PARTNERS</h2>
            </div>
            <div className="slider mb-5">
                <OwlCarousel className='owl-theme'  {...options}>
                    <div class='item'>
                        <img src={require('../img/asset 41.png')} className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 42.png')} className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 43.png')}className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 44.png')}className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 45.png')}className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 46.png')}className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 47.png')}className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 48.png')}className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 49.png')}className='w-50 border border-dark'></img>
                    </div>
                    <div class='item'>
                        <img src={require('../img/asset 50.png')}className='w-50 border border-dark'></img>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Placement
