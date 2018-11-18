import React from "react";
import ProductRows from "./ProductRows";
const ProductTable = props => {
  if (props.products)
    return (
      <table
        className={"table table-hover"}
        align="center"
        style={{
          width: "80%"
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <ProductRows
            products={props.products}
            categoryID={props.categoryID}
            subCategoryID={props.subCategoryID}
          />
        </tbody>
      </table>
    );
  else return <h3>No data</h3>;
};
export default ProductTable;
