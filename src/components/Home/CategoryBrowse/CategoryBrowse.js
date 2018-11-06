import React from 'react';
import "./Category.css"
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom"


const CategoryPanel = props =>{
    let cards = (<h1>Nothing to show</h1>);
    if(props.categories){
        cards = props.categories.map((category, i) => (
            <CategoryCard category={category} key={i}/>
        ))
    }
    return (
        <div className={"container flexer"}>
            {cards}
        </div>
    );
};

const CategoryCard = (props) =>{
    return (
        <div className="card" style={{"width":"18rem"}}>
            <img className="card-img-top" width={"250px"} height={"275"} src={props.category.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.category.name}</h5>
                <p className="card-text">{props.category.description}</p>
            </div>
            <div className="card-body">
                <Link to={`/browse/${props.category._id}`} className="card-link">View</Link>
            </div>
        </div>
    )
};

export default CategoryPanel;