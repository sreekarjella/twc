import React, { useState, useEffect } from "react";
import './Home.css'

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
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);
    return (
        <div className="centered-div" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        </div>
    );
}

export default Home;