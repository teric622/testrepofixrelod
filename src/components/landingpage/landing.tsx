import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Slide from "./landingstyles";

const breakPoints = [
    { width: 1, showSlide: 1, scrollSlide: 1 },
    { width: 550, showSlide: 2, scrollSlide: 2 },
    { width: 768, showSlide: 3, scrollSlide: 1 },
    { width: 1200, showSlide: 4, scrollSlide: 1 }
];

function Landing(): JSX.Element {
    const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const addSlide = () => {
        const nextSlide = Math.max(1, slides.length + 1);
        setSlides([...slides, nextSlide]);
    };

    const removeSlide = () => {
        const lastSlide = Math.max(0, slides.length - 1);
        setSlides(slides.slice(0, lastSlide));
    };

    return (
        <div className="App">
            <h2>Landing Page</h2>
            <div className="slider-controls">
                <button onClick={removeSlide}>Remove</button>
                <button onClick={addSlide}>Add</button>
            </div>
            <div className="Carousel">
                <Carousel isRTL={false} breakPoints={breakPoints}>
                    {slides.map((slide) => (
                        <Slide key={slide}>{slide}</Slide>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Landing;