import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import antiques from '../components/images/antiques.jpeg'
import vinyl from '../components/images/vinyls.jpeg'
import comicBooks from '../components/images/comicBooks.jpeg'
import vintageClothes from '../components/images/vintageClothes.jpeg'
import tradingCards from '../components/images/tradingCards.jpeg'
import toys from '../components/images/toys.jpeg'
import stamps from '../components/images/stamps.jpeg'

function Categories() {
    return (
        <div className="categories">
            <Row xs={1} md={3}>
                <Col>
                    <Card border="dark" className="text-center">
                        <Card.Img variant="top" src={antiques} />
                        <Card.Body>
                            <a href="login">
                                <Card.Title>Antiques</Card.Title>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="text-center">
                        <Card.Img variant="top" src={vinyl} />
                        <Card.Body>
                            <a href="login">
                                <Card.Title>Vinyl Records</Card.Title>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="text-center">
                        <Card.Img variant="top" src={comicBooks}/>
                        <Card.Body>
                            <a href="login">
                                <Card.Title>Comic Books</Card.Title>
                            </a>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>



            <Row xs={1} md={4}>
                <Col>
                    <Card border="dark" className="text-center">
                        <Card.Img variant="top" src={vintageClothes} />
                        <Card.Body>
                            <a href="login">
                                <Card.Title>Vintage Clothing</Card.Title>
                            </a>

                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="text-center">
                        <Card.Img variant="top" src={tradingCards} />
                        <Card.Body>
                            <a href="login">
                                <Card.Title>Trading Cards</Card.Title>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="text-center">
                        <Card.Img variant="top" src={toys} />
                        <Card.Body>
                            <a href="login">
                                <Card.Title>Toys/Figurines</Card.Title>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="text-center">
                        <Card.Img variant="top" src={stamps} />
                        <Card.Body>
                            <a href="login">
                                <Card.Title>Stamps</Card.Title>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>

    )
}

export default Categories;