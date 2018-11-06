import React from "react";
import CategoryRows from "./CategoryRows";
const CategoryTable = props => {
    if (props.categories)
        return (
            <table
                className={"table table-hover"}
                align="center"
                style={{
                    "width": "80%"
                }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <CategoryRows categories={props.categories}/>
                </tbody>
            </table>
        )
    else return (<h3>No data</h3>)
}
export default CategoryTable;