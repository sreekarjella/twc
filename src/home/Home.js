import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import './Home.css'

const carouselImage = [
    {
        image: require('./../images/1.png')
    },
    {
        image: require('./../images/2.png')
    },
    {
        image: require('./../images/3.jpg')
    }
]

function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel-container">
            <Carousel activeIndex={index} onSelect={handleSelect} slide={true} fade>
                {carouselImage.map((slide, i) => {
                    return(
                        <Carousel.Item key={i} interval={3000}>
                            <img src={slide.image} alt="slide" className="carousel-image"></img>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default Home;