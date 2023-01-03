import { mdiArrowRight, mdiMenuRight, mdiPanRight } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

function Imagetext() {
    return (
        <>
            <div className="container c-image-text">
                <div className="row">
                    <div className="text-body">
                        <h2>
                            {' '}
                            Request a Schedule For<br></br>
                            Free Consultation
                        </h2>
                        <a className="text-img-btn">
                            <p className="text-img-p">
                                Request Schedule
                                <Icon path={mdiArrowRight} className="icons-1" />
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container blog">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src="/images/blog12.jpg" className="blog-img1" />
                        <img src="/images/blog13.jpg" className="blog-img2" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className='goal'>OUR MAIN GOAL</p>
                        <h3>Creating a Business with Authentic Integrity</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipissed do eius mod
                            tempor incididunt ut laboret amet, Lorem ipsum amet, consectetur
                            adipiscing se dolor sit amet
                        </p>
                        <div className="main-vision">
                            <div className="py-5 mx-5">
                                <img src="/images/graph1.png" className="graph-img" />
                            </div>
                            <div className="py-5 ">
                                <h3 className="vision-h3">Strategic vision </h3>
                                <p className="vision-p">
                                    Dorem ipsum dolor sit amet, consectetu mod tempor incididunt.
                                </p>
                            </div>
                        </div>
                        <div className="main-vision">
                            <div className="py-5 mx-5">
                                <img src="/images/graph1.png" className="graph-img" />
                            </div>
                            <div className="py-5 ">
                                <h3 className="vision-h3">Strategic vision </h3>
                                <p className="vision-p">
                                    Dorem ipsum dolor sit amet, consectetu mod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Imagetext
