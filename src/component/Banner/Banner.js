import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import banner from '../img/about-h2.jpg'

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row>
                    <Col sm={5}>
                        <div className='bannertext'>
                            <h5>//BEST IT SOLUTION PROVIDER</h5>
                            <h1>Advanced Innovative IT Solutions <span>.</span></h1>
                            <p className='mb-4'>We run all kinds of IT services that vowsuccess</p>
                            <Button variant="primary" size="lg">Get In Touch</Button>
                            <Button className='mx-3' variant="outline-primary" size="lg">Learn More</Button>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div>
                            <img className='w-100' src={banner} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;