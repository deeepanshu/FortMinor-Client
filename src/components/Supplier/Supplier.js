import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import MakeChoices from "./MakeChoices/MakeChoices";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import ViewProducts from "./ViewProducts/ViewProducts";
import ViewRequests from "./ViewRequests/ViewRequests";

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
      console.log(res.data);
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
    return (
      <div>
        <Sidebar links={supplierLinks} />

        <Switch>
          <Route
            path={"/supplier/subcategory"}
            exact
            render={props => (
              <SupplierDashboard
                {...props}
                showForm={this.state.showForm}
                subcategories={this.state.subcategories}
              />
            )}
          />
          <Route
            path={"/supplier/subcategory/:id"}
            render={props => <ViewProducts />}
          />
          <Route
            path={"/supplier/requests"}
            render={props => <ViewRequests />}
          />
        </Switch>
      </div>
    );
  }
}
export default Supplier;
const supplierLinks = [
  { link: "/", heading: "Home" },
  { link: "/supplier/", heading: "Supplier Home" },
  { link: "/supplier/subcategory", heading: "Deals In" },
  { link: "/supplier/requests", heading: "View Requests" }
];

const SupplierDashboard = props => {
  console.log(props);
  let toShow = <Spinner />;
  if (props.showForm) {
    toShow = <MakeChoices />;
  } else if (!props.showForm && props.subcategories) {
    toShow = (
      <div>
        <h3>SubCategories</h3>
        <hr />
        <br />
        <SubCategoryTable subcategories={props.subcategories} />;
      </div>
    );
  }
  return <div className="container">{toShow}</div>;
};

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
            to={`/supplier/subcategory/${subcategory._id}`}
            className="btn btn-primary"
          >
            View Products
          </Link>
        </td>
      </tr>
    ));
  else return <h4>Empty Collection</h4>;
};
