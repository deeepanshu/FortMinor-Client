import React from "react";
import SubCategoryRows from "./SubCategoryRows";
const SubCategoryTable = props => {
    if(props.subcategories)
        return (
            <table
                className={"table table-hover"}
                align="center"
                style={{
                    "width":"80%"
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
                <SubCategoryRows  subcategories = {props.subcategories} categoryID={props.categoryID}/>
                </tbody>
            </table>
        )
    else return (<h3>No data</h3>)
}
export default SubCategoryTable;