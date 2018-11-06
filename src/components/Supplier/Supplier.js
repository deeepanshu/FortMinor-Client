import React from "react";
import { Route, Switch } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
const SupplierDashboard = props => <div>Supplier Data to be shown...</div>;
const Supplier = props => (
  <div>
    Supplier
    <Sidebar links={supplierLinks} />
    <Switch>
      <Route exact path="/supplier" component={SupplierDashboard} />
    </Switch>
  </div>
);
export default Supplier;
const supplierLinks = [
  { link: "/", heading: "Home" },
  { link: "/supplier/", heading: "Supplier Home" }
];
