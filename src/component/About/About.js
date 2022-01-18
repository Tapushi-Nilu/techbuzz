import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import about from '../img/about-h2.jpg';
import img1 from '../img/about-icon-1.png';
import img2 from '../img/about-icon-2.png'

const About = () => {
    return (
        <div className='about'>
             <Container>
                <Row>
                    <Col sm={6}>
                        <div className='about-left'>
                            <img className='img-fluid height' src={about} alt="" />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='about-right'>
                            <h5>//ABOUT US</h5>
                            <h1>We’ve Been Thriving In38 Years <span className='dot'>.</span></h1>
                            <div className='about-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            </div>
                        </div>
                        <div className='about-box'>
                           <Row>
                           <Col>
                                <div className='box-one'>
                                <img src={img1} alt="" />
                                <h5>Business Idea</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className='box-tow'>
                                <img src={img2} alt="" />
                                <h5>Business Idea</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                </div>
                            </Col>
                           </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;