import React from 'react';
import EditUser from "./EditUser/EditUser";
import UserQueries from "./UserQueries/UserQueries";
import {Route, Switch} from 'react-router';
const UserHome = props => (
    <div>
        User Data to be shown...
    </div>
)
const User = props =>(
    <div>
        User
        <Switch>
        <Route exact path="/user" component={UserHome}/>
        <Route path="/user/edit" component={EditUser}/>
        <Route path="/user/queries" component={UserQueries}/>
        </Switch>
    </div>
)
export default User;