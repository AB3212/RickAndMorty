import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const options = {
        margin: 5,
        responsiveClass: true,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
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
        <div className='container mt-5' id='Testimonial'>
            <div className="section">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xl-6 col-12 mt-5">
                        <h4>HAPPY STUDENTS</h4>
                        <h2>ALUMNI SPEAK</h2>
                        <div className="slider">
                            <OwlCarousel className='owl-theme' nav {...options}>
                                <div class='item'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur odit fugit quam autem et ipsum soluta, excepturi sint eaque beatae cum minus nesciunt molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsum quo quibusdam vero similique dicta eius laborum enim natus nesciunt..</p>
                                    <div className="d-flex align-items-center ">
                                        {/* <div className="img "> */}
                                            <img src={require('../img/asset 31.jpeg')} alt="" class='w-25 rounded-circle' />
                                        {/* </div> */}
                                        <div className="text text-black w-50 ms-2 ">
                                            <h5>Diyora OM</h5>
                                            <p className='text-warning'> React Js developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore officia sunt velit ut provident, deleniti dolore sed voluptas quas asperiores, sit corporis pariatur nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum et eveniet dignissimos iure! Obcaecati perferendis itaque cum sequi fugit. .</p>
                                    <div className="d-flex align-items-center ">
                                        {/* <div className="img "> */}
                                            <img src={require('../img/asset 32.jpeg')} alt="" class='w-25 rounded-circle' />
                                        {/* </div> */}
                                        <div className="text text-black w-50 ms-2 ">
                                            <h5>Diyora OM</h5>
                                            <p className='text-warning'> React Js developer</p>
                                        </div>
                                    </div>                                
                                </div>
                                <div class='item'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore officia sunt velit ut provident, deleniti dolore sed voluptas quas asperiores, sit corporis pariatur nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum et eveniet dignissimos iure! Obcaecati perferendis itaque cum sequi fugit..</p>
                                    <div className="d-flex align-items-center ">
                                        {/* <div className="img "> */}
                                            <img src={require('../img/asset 33.jpeg')} alt="" class='w-25 rounded-circle' />
                                        {/* </div> */}
                                        <div className="text text-black w-50 ms-2 ">
                                            <h5>Diyora OM</h5>
                                            <p className='text-warning'> React Js developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore officia sunt velit ut provident, deleniti dolore sed voluptas quas asperiores, sit corporis pariatur nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum et eveniet dignissimos iure! Obcaecati perferendis itaque cum sequi fugit..</p>
                                    <div className="d-flex align-items-center ">
                                        {/* <div className="img "> */}
                                            <img src={require('../img/asset 34.jpeg')} alt="" class='w-25 rounded-circle' />
                                        {/* </div> */}
                                        <div className="text text-black w-50 ms-2 ">
                                            <h5>Patel Harsh</h5>
                                            <p className='text-warning'> Node    Js developer</p>
                                        </div>
                                    </div>
                                </div>

                                <div class='item'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore officia sunt velit ut provident, deleniti dolore sed voluptas quas asperiores, sit corporis pariatur nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum et eveniet dignissimos iure! Obcaecati perferendis itaque cum sequi fugit..</p>
                                    <div className="d-flex align-items-center ">
                                        {/* <div className="img "> */}
                                            <img src={require('../img/asset 35.jpeg')} alt="" class='w-25 rounded-circle' />
                                        {/* </div> */}
                                        <div className="text text-black w-50 ms-2 ">
                                            <h5>Diyora OM</h5>
                                            <p className='text-warning'> React Js developer</p>
                                        </div>
                                    </div>   
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-12 col-xl-6 col-12 position-relative p-4  ">
                        <img src={require('../img/asset 55.webp')} alt="" class='w-100' />
                        <img src={require('../img/asset 40.png')} alt="" class='position-absolute end-0 w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
