import React from 'react'
import { FaEnvelope, FaHouse } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import '../App.css'
const Navbar = () => {
    return (
        <div class=''>
            <div className='header_wrap'>
                <div className='d-flex justify-content-center w-100 flex-wrap-md align-items-center '>
                    <div className='d-flex justify-content-evenly text-decoration-none '>
                        <ul className='d-flex justify-content-between list-unstyled me-5  '>
                            <li><a href='' class='text-decoration-none text-white me-4'><FaEnvelope class='me-2' />info@cdmi.in</a></li>
                            <li><a href='' class='text-decoration-none text-white ms-4'><FaCertificate class='me-2' />verify certificate</a></li>
                        </ul>
                        <ul className='contact list-unstyled ms-5 me-5'>
                            <li class>HAVE ANY QUESTION ? +91 90333 16003</li>
                        </ul>
                        <ul className='d-flex  justify-content-end list-unstyled ms-5   '>
                            <li>select city:surat</li>
                            <li><a href='#Testimonial' className='text-decorstion-none text-white list-style-none ms-4 m-1'><FaFacebookF /></a></li>
                            <li><a href='' className='text-decorstion-none text-white list-style-none m-1'  > <FaTwitter /></a></li>
                            <li><a href='' className='text-decorstion-none text-white list-style-none m-1'  > <FaInstagram /></a></li>
                            <li><a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaGooglePlusG /></a></li>
                            <li><a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaLinkedin /></a></li>
                            <li><a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaYoutube /></a></li>
                            <li><a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaWhatsapp /></a></li>
                        </ul>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg offcanavs-start  container" tabindex="-1" aria-labelledby="offcanvasLabel">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={require('../img/logo.png')} alt="" class='w-50' /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav fw-bold">
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Cources</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Activities</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href=''>Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href='' aria-disabled="true">know us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href='' aria-disabled="true">Get in touch</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href='' aria-disabled="true">student zone</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
