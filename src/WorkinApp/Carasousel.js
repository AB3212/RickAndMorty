import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carasousel = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        autoplaySpeed:2150,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items:1,
    
            }
        },
    };
  return (
    <div>
      <div className="">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/Vacation.webp"/>
        </div>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/4.webp"/>
        </div>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/Vacation.webp"/>
        </div>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/4.webp"/>
        </div>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/Vacation.webp"/>
        </div>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/4.webp"/>
        </div>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/Vacation.webp"/>
        </div>
        <div className="item">
         <img src="https://www.cdmi.in/sliders/4.webp"/>
        </div>
      </OwlCarousel>
      </div>
    </div>
  );
};

export default Carasousel;
