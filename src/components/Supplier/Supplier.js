import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import MakeChoices from "./MakeChoices/MakeChoices";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
//import axios from "axios";

class Supplier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      subcategories: []
    };
  }
  componentDidMount() {
    axios.get("/api/list/supplier/dealsIn").then(res => {
      if (res.data.err === 1) {
        alert("Log in to access the supplier panel.");
        this.props.history.push("/");
      } else if (res.data.err === 2) {
        alert("Don't have enough privillege to visit this page.");
        this.props.history.push("/");
      } else if (res.data.err === 3) {
        this.setState({ showForm: true });
      } else {
        this.setState({ showForm: false, subcategories: res.data.subcategory });
      }
    });
  }
  render() {
    let toShow = <Spinner />;
    if (this.state.showForm) {
      toShow = <MakeChoices />;
    } else if (!this.state.showForm && this.state.subcategories) {
      toShow = <SupplierDashboard subcategories={this.state.subcategories} />;
    }
    return (
      <div>
        <Sidebar links={supplierLinks} />
        {toShow}
      </div>
    );
  }
}
export default Supplier;
const supplierLinks = [
  { link: "/", heading: "Home" },
  { link: "/supplier/", heading: "Supplier Home" },
  { link: "/supplier/requests", heading: "View Requests" }
];
// <Switch>
//   <Route exact path="/supplier" component={SupplierDashboard} />
// </Switch>
const SupplierDashboard = props => (
  <div className="container">
    <h3>SubCategories</h3>
    <hr />
    <br />
    <SubCategoryTable subcategories={props.subcategories} />
  </div>
);
const SubCategoryTable = props => {
  if (props.subcategories)
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
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <SubCategoryRows
            subcategories={props.subcategories}
            categoryID={props.categoryID}
          />
        </tbody>
      </table>
    );
  else return <h3>No data</h3>;
};
const SubCategoryRows = props => {
  if (props.subcategories)
    return props.subcategories.map((subcategory, i) => (
      <tr keys={i}>
        <td>{subcategory.name}</td>
        <td>
          <Link
            to={`/admin/category/${props.categoryID}/${subcategory._id}`}
            className="btn btn-primary"
          >
            View Products
          </Link>
        </td>
      </tr>
    ));
  else return <h4>Empty Collection</h4>;
};
