import React from 'react'

function About2() {
    return (
        <>
            <div className='container c-about2'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <img src='images/custom-team-image.png' className='about-img' />
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12 about-text'>
                        <h3 className='abouttext-h3'>We are here to</h3>
                        <h1 className='abouttext-h1'>Helping Firms, Innovate, Transform, and Lead.
                        </h1>
                        <p className='abouttext-para'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <div className='abouttext-list'>
                            <ul>
                                <li>In enim justo rhoncus ut.</li>
                                <li> Nullam dictum felis eu pede.</li>
                                <li>Vivamus elementum semper nisi.</li>
                                <li>Aenean vulputate. eleifend tellus.</li>
                            </ul>
                            <div>
                                <ul>
                                    <li>In enim justo rhoncus ut.</li>
                                    <li> Nullam dictum felis eu pede.</li>
                                    <li>Vivamus elementum semper nisi.</li>
                                    <li>Aenean vulputate. eleifend tellus.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='about-btn'>
                            <div className=''>
                                <button className='a-btn1'>Read More</button>

                            </div>
                            <div className=''>
                                <button className='a-btn2'>Join Us Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About2