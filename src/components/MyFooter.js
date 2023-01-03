import { mdiFacebook, mdiGithub, mdiGoogle, mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

function MyFooter() {
    return (
        <>
            <div className='container-fluid f-bg'>
                <div className='row'>
                    <footer>
                        <section className='f-heading'>
                            <div className='me-5 '>
                                <span>Get connected with us on social networks:</span>
                            </div>
                            <div >
                                <a href='' className='me-4 text-reset'>
                                    <Icon path={mdiFacebook} className="f-icon" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <Icon path={mdiTwitter} className="f-icon" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <Icon path={mdiGoogle} className="f-icon" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <Icon path={mdiInstagram} className="f-icon" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <Icon path={mdiLinkedin} className="f-icon" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <Icon path={mdiGithub} className="f-icon" />
                                </a>
                            </div>
                        </section>
                        <section>
                            <div className='container-fluid footer-body'>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-12 col-sm-12 '>
                                        <div className='heading-colume'>
                                            <h5>CAMPANY NAME</h5>
                                            <p className='f-colume-p'>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className='heading-colume'>
                                            <h5>Explore</h5>
                                            <div className='f-colume-p'>
                                                <p>Home</p>
                                                <p>About</p>
                                                <p>Services</p>
                                                <p>Pages</p>
                                                <p>Contact</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className='heading-colume'>
                                            <h5>Services</h5>
                                            <div className='f-colume-p'>
                                                <p>Pracing</p>
                                                <p>Setting</p>
                                                <p>order</p>
                                                <p>Product</p>
                                                <p>help</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className='heading-colume'>
                                            <h5>CONTACT</h5>
                                            <div className='f-colume-p'>
                                                <p>New York, NY 10012, US</p>
                                                <p> info@example.com</p>
                                                <p>+ 01 234 567 88</p>
                                                <p> + 01 234 567 89</p>
                                                <p> + 01 234 567 89</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className='f-bottom'>
                                <a>Copy@industrial.com</a>
                            </div>
                        </section>


                    </footer>


                </div>

            </div>



        </>
    )
}

export default MyFooter