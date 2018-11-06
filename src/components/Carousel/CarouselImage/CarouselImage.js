import React from "react";

const CarouselImage = props => (
    <div className={`carousel-item " + ${props.activeCond ? "active" : null}`}>
        <img
            className="d-block w-100"
            src={props.image.carouselLink}
            alt="First slide"
        />
    </div>
);

export default CarouselImage;