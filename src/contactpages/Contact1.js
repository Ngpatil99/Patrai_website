import React from 'react'
import { Carousel } from 'react-bootstrap'
function Contact1() {
    return (
        <div>
            <div className='services-slider'>
                <h1>Contact</h1>
            </div>

            <div>
                <h1 className='contact-text-head'>Let’s Start a Conversation</h1>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 c-form-text'>
                        <h4>Ask how we can help you:</h4>
                        <h5>See our platform in action</h5>
                        <p>Request a personalized demo, or request a trial of TUNE’s partner marketing platform.</p>
                        <h5>Master performance marketing</h5>
                        <p>From TUNE Academy courses to industry research and insights, learn how to grow your business through performance-based partnerships.</p>
                        <h5>Explore life at TUNE</h5>
                        <p>Search open positions, read about company culture and values, and explore our charitable initiatives.</p>
                        <div>
                            <h3>Points of Contact</h3>
                        </div>
                        <div>
                            <h5>U.S. | TUNE</h5>
                            <p> 11350 McCormick Rd, EP III, Suite 200,
                                Hunt Valley, MD 21031</p>
                        </div>
                        <div>
                            <h5> Information and Sales</h5>
                            <p>  partnermarketing@tune.com</p>
                        </div>
                        <div>
                            <h5> Support</h5>
                            <p>  support@tune.com</p>
                        </div>
                        <div>
                            <h5> Verification of Employment</h5>
                            <p>  voe@constellationhbs.com</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='contact-form'>
                            <h6>Please note: all fields are required.</h6>
                            <label> First Name</label>
                            <div>
                                <input type="text" className='contact-input' />
                            </div>
                            <label> Last Name</label>
                            <div>
                                <input type="text" className='contact-input' />
                            </div>
                            <label> Company Name</label>
                            <div>
                                <input type="text" className='contact-input' />
                            </div>

                            <label> Job Title</label>
                            <div>
                                <input type="text" className='contact-input' />
                            </div>
                            <label>Contry</label>
                            <div>
                                <select className="contact-input" placeholder='select' type="text">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <label> Business</label>
                            <div>
                                <select className="contact-input" placeholder='select' type="text">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <label>Comment</label>
                            <div>
                                <input type="text" className='contact-input' />
                            </div>
                            <div className='check-b'>
                                <input type="checkbox" className='check' />I'd like to receive more information about TUNE; I understand and agree to the privacy policy.
                            </div>
                            <div>
                                <button className='contact-btn'>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact1