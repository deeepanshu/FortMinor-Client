import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Category from './Category/Category';
import User from './User/User';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import Sidebar from "../Sidebar/Sidebar";

class Admin extends React.Component {
    render() {
        return (
            <div>
                <Sidebar links={adminLinks}/>

                <Switch>
                    <Route exact path="/admin" component={AdminDashboard}/>
                    <Route path="/admin/category" component={Category}/>
                    <Route path="/admin/user" component={User}/>
                </Switch>

            </div>
        )
    };
}
export default withRouter(Admin);
const adminLinks = [
    {link:"/", heading:"Home"},
    {link: "/admin/", heading: "Admin Home"},
    {link: "/admin/category", heading: "Category"},
    {link: "/admin/user", heading: "User"}
]
