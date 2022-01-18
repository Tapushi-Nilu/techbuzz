import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './Services.css';
import service1 from '../img/service-1.jpg';
import service2 from '../img/service-3.jpg'

const Services = () => {
    return (
        <div>
            <div className='services-heading'>
                <h4>// Services //</h4>
                <h1>Services</h1>
                <h2 className='text-center'>Data Analytics, Content & IT <br/>
Managed Service <span>.</span></h2>
            </div>
            <Container>
                <Row>
                <CardGroup>
                    <Card className='mx-5'>
                        <Card.Img className='p-5' variant="top" src={service1} />
                        <Card.Body>
                        <Card.Title className='text-center'>Content Management</Card.Title>
                        <Card.Text className='text-center'>
                        Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology.
                        </Card.Text>
                        <div>
                            <ul className='service-icon'>
                                <li> <span className='mx-3'><i class="far fa-check-square"></i></span> The Information Technology Umbrella</li>
                                <li> <span className='mx-3'><i class="far fa-check-square"></i></span>  Can Be Quite Large, Covering Many Fields</li>
                                <li> <span className='mx-3'><i class="far fa-check-square"></i></span> IT Professionals Perform A Variety</li>
                            </ul>
                        </div>
                        </Card.Body>
                    </Card>
                    <Card className='border'>
                        <Card.Img className='p-5' variant="top" src={service2} />
                        <Card.Body>
                        <Card.Title className='text-center'>Advanced Analytics</Card.Title>
                        <Card.Text className='text-center'>
                        Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology.
                        </Card.Text>
                        <div>
                            <ul className='service-icon'>
                                <li> <span className='mx-3'><i class="far fa-check-square"></i></span> The Information Technology Umbrella</li>
                                <li> <span className='mx-3'><i class="far fa-check-square"></i></span>  Can Be Quite Large, Covering Many Fields</li>
                                <li> <span className='mx-3'><i class="far fa-check-square"></i></span> IT Professionals Perform A Variety</li>
                            </ul>
                        </div>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </Row>
            </Container>
        </div>
    );
};

export default Services;