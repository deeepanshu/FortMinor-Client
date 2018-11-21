import React from "react";
import EditUser from "./EditUser/EditUser";
import ViewRequests from "./ViewRequests/ViewRequests";
import { Route, Switch } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const UserHome = props => {
  console.log(props);
  let userData = <h3>Loading...</h3>;
  if (props.user) {
    userData = (
      <div className="container">
        <div
          className="container"
          style={{ "font-size": "24px", "font-weight": "bold" }}
        >
          <h2>User Data</h2>
          <p>Full Name: {props.user.fullName}</p>
          <p>Email: {props.user.email}</p>
          <p>Contact: {props.user.contact}</p>
          <p>
            Organisation Name:
            {" " + props.user.organisationName}
          </p>
          <p>Supplier: {props.user.isSupplier ? "Yes" : "No"}</p>
        </div>
      </div>
    );
  }
  return <div>{userData}</div>;
};
class User extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div>
        <Sidebar links={userLinks} />
        <Switch>
          <Route
            exact
            path="/user"
            render={props => <UserHome {...props} user={this.props.user} />}
          />
          <Route path="/user/edit" component={EditUser} />
          <Route path="/user/requests" component={ViewRequests} />
        </Switch>
      </div>
    );
  }
}
export default User;
const userLinks = [
  { link: "/", heading: "Home" },
  { link: "/user/", heading: "User Dashboard" },
  { link: "/user/edit", heading: "Edit Profile" },
  { link: "/user/requests", heading: "Requests/Order" }
];
