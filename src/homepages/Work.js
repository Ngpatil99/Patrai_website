import { mdiArrowRight } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { Carousel } from 'react-bootstrap'
function Work() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h1 className="work-heading">
              We Are Expert In <span className="work-heading-p">All</span>
              <p className="work-heading-p">Professional Works</p>
            </h1>
            <div>
              {' '}
              <div className="container">
                <div className="row">
                  <Carousel>
                    <Carousel.Item>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="team-9">
                            <img
                              src="images/img-cap-img-3.jpg"
                              alt="Team Image"
                              className="work-img"
                            />
                            <div className="work-text">
                              <h3>Professional Enginear</h3>
                              <p className="work-para">
                                With great pleasure and happiness I want to
                                inform you that I have found my soul mate on
                                Anuroop WiwahaSanstha.
                              </p>
                            </div>
                            <div className="work-read-btn">
                              <a href="#">Read More
                                <Icon path={mdiArrowRight} className="icons-work" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="team-9">
                            <img
                              src="images/img-cap-img-4.jpg"
                              alt="Team Image"
                              className="work-img"
                            />
                            <div className="work-text">
                              <h2>Robotic Voice</h2>
                              <p className="work-para">
                                With great pleasure and happiness I want to
                                inform you that I have found my soul mate on
                                Anuroop WiwahaSanstha.
                              </p>
                            </div>
                            <div className="work-read-btn">
                              <a href="#">Read More
                                <Icon path={mdiArrowRight} className="icons-work" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="team-9">
                            <img
                              src="images/img-cap-img-5.jpg"
                              alt="Team Image"
                              className="work-img"
                            />
                            <div className="work-text">
                              <h2>CNC Machine</h2>
                              <p className="work-para">
                                With great pleasure and happiness I want to
                                inform you that I have found my soul mate on
                                Anuroop WiwahaSanstha.
                              </p>
                            </div>
                            <div className="work-read-btn">
                              <a href="#">Read More
                                <Icon path={mdiArrowRight} className="icons-work" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="team-9">
                            <img
                              src="images/img-cap-img-6.jpg"
                              alt="Team Image"
                              className="work-img"
                            />
                            <div className="work-text">
                              <h2>The oil container</h2>
                              <p className="work-para">
                                With great pleasure and happiness I want to
                                inform you that I have found my soul mate on
                                Anuroop WiwahaSanstha.
                              </p>
                            </div>
                            <div className="work-read-btn">
                              <a href="#">Read More
                                <Icon path={mdiArrowRight} className="icons-work" />

                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="work-form-body">
              <div className="w-form-heading">
                <p className="w-heading-p1"> Get Your Free</p>
                <p className="work-heading-p"> Consultation & Quote</p>
                <div className="w-form-email">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name*"
                    className="w-form-input"
                  />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="email*"
                  className="w-form-input"
                />
                <div className="w-form-email">
                  <input
                    type="text"
                    id="service"
                    name="services"
                    placeholder="Services*"
                    className="w-form-input"
                  />
                </div>
                <div className="w-form-email">
                  <textarea
                    id="w3review"
                    name="w3review"
                    placeholder="Your Text*"
                    className="w-form-input"
                  ></textarea>
                </div>
                <p className="f-text">
                  * Need to fill marked. Make a call for more details required.
                </p>
                <div>
                  <input
                    type="submit"
                    value="send message"
                    className="form-btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
