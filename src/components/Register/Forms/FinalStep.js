import React  from "react";
import {Link} from "react-router-dom"
const FinalStep = props => {
    return (
        <div>
            <h4>Welcome to our site!</h4>
            <p>We hope for you a better future.</p>
            <p><Link to={"/"}> Click to go to Home</Link></p>
        </div>
    );
};

export default FinalStep;