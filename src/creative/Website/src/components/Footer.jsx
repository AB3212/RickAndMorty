import React from 'react'
import '../App.css'
import { FaEnvelope, FaHouse } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaLinkedin, FaHandPointRight } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">

            <div className='container '>
                <div className="row ">
                    <div className="col-4 mt-5">
                        <div className="logo">
                            <img src={require('../img/1.png')} className='w-100 ' />
                        </div>
                        <div className="text-white mt-4">
                            <p>Creative Design and Multimedia Institute is leading computer training institute in Gujarat. We offers government approved computer training courses in Gujarat.</p>
                        </div>
                        <div className="text-warning">
                            <p>FOLLOW US ON</p>
                            <a href='' className='text-decorstion-none text-white list-style-none me-1 '><FaFacebookF /></a>
                            <a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaTwitter /></a>
                            <a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaInstagram /></a>
                            <a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaGooglePlusG /></a>
                            <a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaLinkedin /></a>
                            <a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaYoutube /></a>
                            <a href='' className='text-decorstion-none text-white list-style-none m-1'  ><FaWhatsapp /></a>
                        </div>
                    </div>
                    <div className=" col col-4 text-white mt-5 ">
                        <h4 className='w-75'>FEATURE LINKS</h4>
                        <li className='list-unstyled py-2 w-50'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 ' >about us</a></li>
                        <li className='list-unstyled py-2 w-50'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Blogs</a></li>
                        <li className='list-unstyled py-2 w-50'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Join us</a></li>
                        <li className='list-unstyled py-2 w-50'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Terms & conditions</a></li>
                        <li className='list-unstyled py-2 w-50'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Company Login</a></li>
                        <li className='list-unstyled py-2 w-75'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Certificate Verification</a></li>

                    </div>
                    <div className="col-4 text-white  mt-5">
                    <h4>CONTACT US</h4>
                    <div className="text-warning mt-4">
                        <h6>HEAD OFFICE - YOGICHOWK</h6>
                        <p className='text-white'>401-404, 4th Floor, City Center Complex, Nr.Yogichowk,Varachha,Surat.<br></br><span className='text-warning'>Mo : +91 90333 16003</span></p>
                    </div>
                    <h4 className='text-warning'>OTHER BRANCHES</h4>
                        <li className='list-unstyled py-2 w-50'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 ' >Yogi Chowk</a></li>
                        <li className='list-unstyled py-2'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Katargam</a></li>
                        <li className='list-unstyled py-2'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Adajan</a></li>
                        <li className='list-unstyled py-2'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Mota Varachha</a></li>
                        <li className='list-unstyled py-2'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Navsari</a></li>
                        <li className='list-unstyled py-2'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Dindoli</a></li>
                        <li className='list-unstyled py-2'><FaHandPointRight /><a href="" className='text-decoration-none text-white ms-2 '>Sarthana</a></li>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
