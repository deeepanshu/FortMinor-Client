import React from "react";
import "./About.css";

const About = props => {
    return (
        <div class="container" id="box">
            <div class="row">
                <div class="col-4">
                    <img
                        class="d-block w-100"
                        alt="About"
                        src="http://via.placeholder.com/720x866"
                    />
                </div>
                <div class="col-8 text-justify">
                    <h3>Our Story</h3>
                    <p>
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
                        Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
                        dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
                        porta est ac neque bibendum viverra. Vivamus lobortis magna ut
                        interdum laoreet. Donec gravida lorem elit, quis condimentum ex
                        semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
                        sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
                        congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
                        lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
                        pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
                        vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                        efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                        ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
                        orci.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;