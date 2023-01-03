import React from 'react'

function Projectslider() {
    return (
        <>
            <div className='project-slider'>
                <h1>Project</h1>
            </div>
            <div className='container main-project'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <img src='images/project-img-2.jpg' className='project-img' />
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <h2 className='project-text-heading'>Project <span className='subheading'>Details</span>
                        </h2>
                        <div className='p-text-content'>
                            <p>Project Date :Mon, May 23 2018</p>
                            <p> Location :Denmark, lambaste</p>
                            <p> Value :$560.000</p>
                            <p>Categories :<span className='man-power'>Man Power</span></p>
                        </div>
                        <p className='p-text-content-p'>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <h2 className='project-text-heading'>Project <span className='subheading'>Specification</span>  </h2>
                        <p className='p-text-content-p'>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                        <div className='main-text-content'>
                            <ul className='p-text-content'>
                                <li>liroject Date :Mon, May 23 2018</li>
                                <li> Location :Denmark, lambaste</li>
                                <li> Value :$560.000</li>
                                <li>Categories :<span className='man-power'>Man Power</span></li>
                            </ul>
                            <div>
                                <ul className='p-text-content'>
                                    <li>liroject Date :Mon, May 23 2018</li>
                                    <li> Location :Denmark, lambaste</li>
                                    <li> Value :$560.000</li>
                                    <li>Categories :<span className='man-power'>Man Power</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <img src='images/project-img-2.jpg' className='project-img' />
                    </div>
                </div>
            </div>

            <div className='space'></div>
            <div className='container main-p-btn'>
                <div className='p-btn'>
                    <a href='#' className='p-btn1'>Previous</a>
                </div>
                <div className='p-btn'>
                    <a href='#' className='p-btn1'> Next</a>
                </div>
            </div>
            <div className='space'></div>

        </>
    )
}

export default Projectslider