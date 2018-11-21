import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import { loadCategories, loadCurrentUser } from "./actions/index";
import { Route, Switch, withRouter } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Supplier from "./components/Supplier/Supplier";
import Home from "./components/Home/Home";
import SubCategoryBrowse from "./components/Home/SubCategoryBrowse/SubCategoryBrowse";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import axios from "axios";
import Register from "./components/Register/Register";
class Root extends Component {
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadCurrentUserDispatch();
  }

  signIn = e => {
    e.preventDefault();
    console.log("AAA");
    let request_url = "/auth/login/local";
    axios
      .post(request_url, {
        username: e.target.username.value,
        password: e.target.password.value
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  signUp = e => {
    console.log(e.target);
    e.preventDefault();
    let email = e.target.email.value;
    console.log(email);
    let request_url = "/auth/add/verify";
    axios
      .post(request_url, {
        email: e.target.email.value
      })
      .then(
        function(response) {
          console.log(response);
          let code = response.data.status;
          if (code === 2) {
            alert("Invite Sent to the e-mail ID provided.");
            e.target.value = "";
          } else if (code === 0) {
            alert("You are already registered with us.");
            e.target.value = "";
          }
          if (code === 1) {
            alert("Request Timed Out. Re-sending invite link.");
            e.target.value = "";
          }
        },
        function(reject) {
          console.log(reject);
        }
      )
      .catch(function(error) {
        console.log(error);
      });
  };

  logoutHandler() {
    axios.get("/auth/logout").then(res => {
      this.props.loadCurrentUserDispatch();
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          signup={this.signUp}
          user={this.props.user}
          signIn={this.signIn}
          logoutHandler={this.logoutHandler}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse/:id" component={SubCategoryBrowse} />
          <Route path="/admin" component={Admin} />
          <Route
            path="/user"
            render={props => <User {...props} user={this.props.user} />}
          />
          <Route path="/supplier" component={Supplier} />
          <Route path="/register/verify/:token" component={Register} />
          <Route path={"/blog"} component={Blog} />
          <Route path={"/about"} component={About} />
          <Route path={"/gallery"} component={Gallery} />
          <Route path={"/contact"} component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.categoryReducer.category,
    user: state.userReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategoriesDispatch: () => dispatch(loadCategories()),
    loadCurrentUserDispatch: () => dispatch(loadCurrentUser())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
