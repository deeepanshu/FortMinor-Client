import React from "react";
import { Link } from "react-router-dom";
const ProductRows = props => {
  if (props.products)
    return props.products.map((product, i) => (
      <tr keys={i}>
        <td>{product.name}</td>
        <td>
          <Link
            to={`/supplier/subcategory/${props.subCategoryID}/${product._id}`}
            className="btn btn-primary"
          >
            View
          </Link>
        </td>
      </tr>
    ));
  else return <h4>Empty Collection</h4>;
};
export default ProductRows;
