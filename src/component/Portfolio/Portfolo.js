import React from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import port1 from '../img/pro-2-1-363x363.jpg';
import port2 from '../img/pro-4-1-363x363.jpg';
import port3 from '../img/pro-6-363x363.jpg';
import './Portfolio.css'

const Portfolo = () => {
    return (
        <div className='portfolio'>
             <div className='services-heading'>
                <h4>// CASE STUDY //</h4>
                <h1>Portfolio</h1>
                <h2 className='text-center'>Our Portfolio/Works</h2>
            </div>
            <div>
                <Container>
                    <Row>
                <CardGroup>
                <Card className='m-4 c-port'>
                    <Card.Img variant="top" src={port1} />
                    <Card.Body className='cp-body'>
                    <Card.Title>Software Solutions</Card.Title>
                    <Card.Text>
                    Kesemiro Software Solution
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-4 c-port'>
                    <Card.Img variant="top" src={port2} />
                    <Card.Body className='cp-body'>
                    <Card.Title>App Solutions</Card.Title>
                    <Card.Text>
                    Kesemiro Software Solution

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-4 c-port'>
                    <Card.Img variant="top" src={port3} />
                    <Card.Body className='cp-body'>
                    <Card.Title>Software Solutions</Card.Title>
                    <Card.Text>
                    Kesemiro Software Solution
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>                                      
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Portfolo;