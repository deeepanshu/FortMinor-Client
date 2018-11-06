import React from "react";
import {Link} from "react-router-dom";
const ProductRows = props => {
    if(props.products)
        return props.products.map((product, i)=>(
            <tr keys={i}>
                <td>
                    {product.name}
                </td>
                <td>
                    <Link to={`/admin/category/${props.categoryID}/${props.subCategoryID}/${product._id}`} className="btn btn-primary">View</Link>
                </td>
                <td>
                    <Link to={`/admin/category/${props.categoryID}/${props.subCategoryID}/${product._id}`} className="btn btn-warning">Edit</Link>
                </td>
                <td>
                    <Link to={`/admin/category/${props.categoryID}/${props.subCategoryID}/${product._id}`} className="btn btn-danger">Delete</Link>
                </td>
            </tr>
        ))
    else return  (<h4>Empty Collection</h4>)
};
export default ProductRows;