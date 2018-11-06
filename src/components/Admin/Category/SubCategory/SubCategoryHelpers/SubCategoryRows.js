import React from "react";
import {Link} from "react-router-dom";
const SubCategoryRows = props => {
    if(props.subcategories)
        return props.subcategories.map((subcategory, i)=>(
            <tr keys={i}>
                <td>
                    {subcategory.name}
                </td>
                <td>
                    <Link to={`/admin/category/${props.categoryID}/${subcategory._id}`} className="btn btn-primary">View</Link>
                </td>
                <td>
                    <Link to={`/admin/category/${props.categoryID}/${subcategory._id}`} className="btn btn-warning">Edit</Link>
                </td>
                <td>
                    <Link to={`/admin/category/${props.categoryID}/${subcategory._id}`} className="btn btn-danger">Delete</Link>
                </td>
            </tr>
        ))
    else return  (<h4>Empty Collection</h4>)
};
export default SubCategoryRows;