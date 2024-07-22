import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'bootstrap';
import { Link } from 'react-router-dom';

const Course = () => {
    return (
        <div>
            <div className='heading text-center'>
                <h4 className='font-bold'>CREATIVE COURSE</h4>
                <h1>OFFERED COURSES</h1>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card mb-4">
                            <a href="#development" className='text-decoration-none text-black'>
                                <img src={require('../img/asset 14.webp')} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Development Courses</h5>
                                    <Link to='/Development' class="btn btn-primary">know more....!</Link>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <a href="" className='text-decoration-none text-black'>

                            <img src={require('../img/asset 15.webp')} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Design Courses</h5>

                                <a href="#" class="btn btn-primary">know more....!</a>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12 ">
                        <div class="card">
                            <a href="" className='text-decoration-none text-black'>

                            <img src={require('../img/asset 16.webp')} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Programming IT</h5>

                                <a href="#" class="btn btn-primary">know more....!</a>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <a href="" className='text-decoration-none text-black'>
                            <img src={require('../img/asset 17.webp')} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Trendy Courses</h5>
                                <a href="#" class="btn btn-primary">know more....!</a>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <a href="" className='text-decoration-none text-black'>
                            <img src={require('../img/asset 18.jpeg')} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Civil-Mech. Engineering</h5>
                                <a href="#" class="btn btn-primary">know more....!</a>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <a href="" className='text-decoration-none text-black'>
                            <img src={require('../img/asset 19.webp')} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Business Development</h5>
                                <a href="#" class="btn btn-primary">know more....!</a>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex bg-white   justify-content-center m-auto mt-5  '>
                <a href='' className=' btn btn-warning text-white'>
                    View All Cource <FaArrowRight />
                </a>
            </div>
        </div>
    )
}



export default Course
