import React from "react";
import CarouselImage from "./CarouselImage/CarouselImage";
const Carousel = props => {
    const allImages = props.carousel.map((image, i) => {
        return <CarouselImage key={i} image={image} activeCond={i === 0} />;
    });
    return (
        <div>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel">
                {allImages}
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;