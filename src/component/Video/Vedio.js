import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Video.css'

const Vedio = () => {
    return (
        <div className='video'>
            <Container>
                <Row>
                    <Col md='7'>
                    <div className='about-right video-details'>
                            <h5>// INTRO VIDEO</h5>
                            <h1>We’ve Been Thriving In38 Years <span className='dot'>.</span></h1>
                            <div className='about-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            </div>

                            <Row>
                                <Col>
                                <div>
                                <ul className='service-icon'>
                                    <li> <span className='mx-3'><i class="far fa-check-square"></i></span>  Easy To Edit</li>
                                    <li> <span className='mx-3'><i class="far fa-check-square"></i></span>  24/ Online Support</li>
                                </ul>
                                </div>
                                </Col>
                                <Col>
                                <div>
                                <ul className='service-icon'>
                                    <li> <span className='mx-3'><i class="far fa-check-square"></i></span>  Easy To Edit</li>
                                    <li> <span className='mx-3'><i class="far fa-check-square"></i></span>  24/ Online Support</li>
                                </ul>
                                </div>
                                </Col>
                            </Row>

                    </div>
                  <div className='btn-v'>
                  <Button variant="primary" size="lg">Get Started Now</Button>
                  </div>
                    </Col>
                    <Col>
                        <div className='video-icon'>
                        <div className='v-icon'>
                            <i className='fa fa-play'></i>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Vedio;