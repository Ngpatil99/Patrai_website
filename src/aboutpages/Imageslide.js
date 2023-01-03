import React from 'react'
import { ProgressBar } from 'react-bootstrap'
function imageslide() {
    return (
        <>

            <div className='main-imag-slider'>
                <div className='imageslider'>
                    <div className='col-lg-6 col-md-12 col-sm-12 '>
                        <div className='text-bg'>
                            <h4 className='text-h3'>Why Choose Us?</h4>
                            <h2 className='text-h2'>Get a solution for all your Industries needs.
                            </h2>
                            <div>
                                <p>Production
                                    <ProgressBar striped variant="success" now={40} />
                                </p>
                                <p> Export & Import
                                    <ProgressBar striped variant="info" now={20} />

                                </p>
                                <p> Customer Satisfaction
                                    <ProgressBar striped variant="warning" now={60} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 '>
                        <video className="video-section" autoPlay loop muted>
                            <source src="/images/Myvideo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>)
}

export default imageslide