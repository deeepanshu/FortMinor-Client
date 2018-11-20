import React from "react";
import EditUser from "./EditUser/EditUser";
import ViewRequests from "./ViewRequests/ViewRequests";
import { Route, Switch } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const UserHome = props => <div>User Data to be shown...</div>;
const User = props => (
  <div>
    <Sidebar links={userLinks} />
    <Switch>
      <Route exact path="/user" component={UserHome} />
      <Route path="/user/edit" component={EditUser} />
      <Route path="/user/requests" component={ViewRequests} />
    </Switch>
  </div>
);
export default User;
const userLinks = [
  { link: "/", heading: "Home" },
  { link: "/user/", heading: "User Dashboard" },
  { link: "/user/edit", heading: "Edit Profile" },
  { link: "/user/requests", heading: "Requests/Order" }
];
