import React from 'react'

const Card = () => {
    return (
        <div>
            <heading className='heading text-center mt-5'>
                <h5 className='mt-5'>READ OUR DIFFERENCE</h5>
                <h1 >WHY CHOOSE CREATIVE</h1>
            </heading>
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card mb-3">
                            <img src={require('../img/assistant.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h3>
                                    Interview Assistance</h3>
                                    <p class="card-text">At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <img src={require('../img/images.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h4>
                                    Latest Curriculum</h4>
                                    <p class="card-text mb-1">We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <img src={require('../img/support.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h4>Lifetime Support</h4>
                                    <p class="card-text mb-4">We will provide you lifetime support on all the courses you learned from us.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <img src={require('../img/technology.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h4>Latest Technology</h4>
                                    <p class="card-text ">We strive to let you have a solid foundational knowledge of technologies shaping the IT World today. </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <img src={require('../img/trainer.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h4>Industry Experts As Trainers</h4>
                                    <p class="card-text">Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-4 col-12">
                        <div class="card">
                            <img src={require('../img/upgrade.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h4>Free Upgradation</h4>
                                    <p class="card-text mb-4">We will be provided free upgradation for any newer version of the course you have.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
