import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Aboutus = () => {
    return (
        <div>
            <div className="mt-5">
                <div className="row position-relative ">
                    <div className="col-lg-8  col-md-12 col-xl-6 col-12 w-40  bg-white z-3 p-5 rounded-end-pill border mt-5">
                        <h5>ABOUT US</h5>
                        <h5>IT CAREER IN GUJARAT, MOVING TOWARDS THE BETTER TOMORROW!</h5>
                        <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 10 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                        <button className='btn btn-warning text-white px-5 py-3 fw-bold'>Enroll now..!<FaArrowRight  className='ms-2'/></button>
                    </div>
                    <div className="col-lg-4 col-lg-6 col-md-12 col-xl-6 col-12 w-60 end-0 mt-5">
                            <img src={require('../img/asset 30.webp')} className=' float-end w-100'></img>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Aboutus
