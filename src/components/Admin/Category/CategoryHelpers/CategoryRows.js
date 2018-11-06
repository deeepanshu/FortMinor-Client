import React from 'react';
import {Link} from "react-router-dom";
const CategoryRows = props => {
    if (props.categories)
        return props.categories.map((category, i) => (
            <tr keys={i}>
                <td>
                    {category.name}
                </td>
                <td>
                    <Link to={"/admin/category/" + category._id} className="btn btn-primary">View</Link>
                </td>
                <td>
                    <Link to={"/admin/category/" + category._id} className="btn btn-warning">Edit</Link>
                </td>
                <td>
                    <Link to={"/admin/category/" + category._id} className="btn btn-danger">Delete</Link>
                </td>
            </tr>
        ))
    else return (<h4>Empty Collection</h4>)
};
export default CategoryRows;