import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Root from "./Root";

class App extends Component {
  componentDidMount() {
    document.title = "Make Me Builder";
  }
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
