import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../img/logo-2.png';
import ft1 from '../img/footer-info-icon-1.png';
import ft2 from '../img/footer-info-icon-2.png';
import ft3 from '../img/footer-info-icon-3.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='text-center py-5 ft-logo'><img src={logo} alt=''/></div>
            <Container className='ft-top'>
                <Row>
                    <Col md='3'>
                        <div className='d-flex allign-items-center'>
                        <div className='mx-4'><img src={ft1} alt=''/></div>
                        <div>
                            <h6>Phone Number</h6>
                            <a href='#'>+876543234567</a>
                        </div>
                        </div>
                    </Col>
                    <Col md='3'>
                        <div className='d-flex allign-items-center'>
                        <div className='mx-4'><img src={ft2} alt=''/></div>
                        <div>
                            <h6>Phone Number</h6>
                            <a href='#'>+876543234567</a>
                        </div>
                        </div>
                    </Col>
                    <Col md='3'>
                        <div className='d-flex allign-items-center'>
                        <div className='mx-4'><img src={ft3} alt=''/></div>
                        <div>
                            <h6>Phone Number</h6>
                            <a href='#'>+876543234567</a>
                        </div>
                        </div>
                    </Col>
                    <Col md='3'>
                    <div className='st-btn'>
                        <button>Back to top</button>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md='4'>
                        <h4>// Services</h4>
                        <Row>
                            <Col>
                            <ul>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                            </ul>
                            </Col>
                            <Col>
                            <ul>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                            </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='2'>
                        <h4>// More Link</h4>
                    <ul>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                            </ul>
                    </Col>
                    <Col md='2'>
                        <h4>// Support</h4>
                    <ul>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                            </ul>
                    </Col>
                    <Col md='4'>
                        <h4>// News Feeds</h4>
                    <Row>
                            <Col>
                            <ul>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                            </ul>
                            </Col>
                            <Col>
                            <ul>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                                <li>It Software</li>
                            </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div><p className='text-center p-5 mt-4'>Copyright By@Example - 2020</p></div>
        </div>
    );
};

export default Footer;