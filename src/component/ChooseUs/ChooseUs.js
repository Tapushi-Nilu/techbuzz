import React from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import news1 from '../img/news-5.jpg';
import news2 from '../img/news-6.jpg';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className='choose'>
             <div className='services-heading'>
                <h4>// HIRE US, WHY NOT //</h4>
                <h1>Hire Us</h1>
                <h2 className='text-center'>Why Choose Us</h2>
            </div>
            <div>
                <Container>
                    <Row>
                <CardGroup>
                <Card className='m-4'>
                    <Card.Img variant="top" src={news1} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-4'>
                    <Card.Img variant="top" src={news2} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-4'>
                    <Card.Img variant="top" src={news1} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
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

export default ChooseUs;