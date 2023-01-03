import { mdiFacebook, mdiInstagram, mdiLinkedin, mdiTwitter, mdiYoutube } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

function Aboutteam() {
    return (
        <>
            <div className="container">
                <div className="aboutteam-title">
                    <h2 className='team-heading1'> Our Expert for </h2>
                    <h2 className='team-heading2'>Different Solutions</h2>                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="team-4">
                            <div className="team-content">
                                <h2>Josh Dunn</h2>
                                <h3>CEO &amp; Founder</h3>
                            </div>
                            <div className="team-img">
                                <img src="images/team-1-1.jpg" alt="Team Image" />
                                <div className="team-content">
                                    <p>Some text goes here that describes about team member</p>
                                </div>
                            </div>
                            <div className="team-content">
                                <div className="team-social">
                                    <a className="social-tw" href=""><Icon path={mdiTwitter}></Icon></a>
                                    <a className="social-fb" href=""><Icon path={mdiFacebook}></Icon></a>
                                    <a className="social-li" href=""><Icon path={mdiLinkedin}></Icon></a>
                                    <a className="social-in" href=""><Icon path={mdiInstagram}></Icon></a>
                                    <a className="social-yt" href=""><Icon path={mdiYoutube}></Icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-4">
                            <div className="team-content">
                                <h2>Mollie Ross</h2>
                                <h3>Art Director</h3>
                            </div>
                            <div className="team-img">
                                <img src="images/team-1-2.jpg" alt="Team Image" />
                                <div className="team-content">
                                    <p>Some text goes here that describes about team member</p>
                                </div>
                            </div>
                            <div className="team-content">
                                <div className="team-social">
                                    <a className="social-tw" href=""><Icon path={mdiTwitter}></Icon></a>
                                    <a className="social-fb" href=""><Icon path={mdiFacebook}></Icon></a>
                                    <a className="social-li" href=""><Icon path={mdiLinkedin}></Icon></a>
                                    <a className="social-in" href=""><Icon path={mdiInstagram}></Icon></a>
                                    <a className="social-yt" href=""><Icon path={mdiYoutube}></Icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-4">
                            <div className="team-content">
                                <h2>Dylan Adams</h2>
                                <h3>Developer</h3>
                            </div>
                            <div className="team-img">
                                <img src="images/team-1-3.jpg" alt="Team Image" />
                                <div className="team-content">
                                    <p>Some text goes here that describes about team member</p>
                                </div>
                            </div>
                            <div className="team-content">
                                <div className="team-social">
                                    <a className="social-tw" href=""><Icon path={mdiTwitter}></Icon></a>
                                    <a className="social-fb" href=""><Icon path={mdiFacebook}></Icon></a>
                                    <a className="social-li" href=""><Icon path={mdiLinkedin}></Icon></a>
                                    <a className="social-in" href=""><Icon path={mdiInstagram}></Icon></a>
                                    <a className="social-yt" href=""><Icon path={mdiYoutube}></Icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-4">
                            <div className="team-content">
                                <h2>Jennifer Page</h2>
                                <h3>Designer</h3>
                            </div>
                            <div className="team-img">
                                <img src="images/team-1-4.jpg" alt="Team Image" />
                                <div className="team-content">
                                    <p>Some text goes here that describes about team member</p>
                                </div>
                            </div>
                            <div className="team-content">
                                <div className="team-social">
                                    <a className="social-tw" href=""><Icon path={mdiTwitter}></Icon></a>
                                    <a className="social-fb" href=""><Icon path={mdiFacebook}></Icon></a>
                                    <a className="social-li" href=""><Icon path={mdiLinkedin}></Icon></a>
                                    <a className="social-in" href=""><Icon path={mdiInstagram}></Icon></a>
                                    <a className="social-yt" href=""><Icon path={mdiYoutube}></Icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutteam