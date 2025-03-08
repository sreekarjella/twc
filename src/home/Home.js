import React, { useState, useEffect } from "react";
import './Home.css'
import { Col, Container, Row } from "react-bootstrap";
import Header from "../header/Header";

const images = [
    'images/1.png',  // Path relative to the public folder
    'images/2.png',
    'images/3.jpg',
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    });
    return (
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="centered-div" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>Routes placeholder</Col>
            </Row>
        </Container>
    );
}

export default Home;