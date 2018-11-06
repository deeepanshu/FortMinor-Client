import React from "react";
import EditUser from "./EditUser/EditUser";
import UserQueries from "./UserQueries/UserQueries";
import { Route, Switch } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const UserHome = props => <div>User Data to be shown...</div>;
const User = props => (
  <div>
    User
    <Sidebar links={userLinks} />
    <Switch>
      <Route exact path="/user" component={UserHome} />
      <Route path="/user/edit" component={EditUser} />
      <Route path="/user/queries" component={UserQueries} />
    </Switch>
  </div>
);
export default User;
const userLinks = [
  { link: "/", heading: "Home" },
  { link: "/user/", heading: "User Dashboard" },
  { link: "/user/edit", heading: "Edit Profile" },
  { link: "/user/queries", heading: "Queries" }
];
