import React from "react";
import { loadProduct, requestToOrder } from "../../../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      placed: false
    };
    this.placeRequest = this.placeRequest.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match);
    this.props.loadProductDispatch(this.props.match.params.id3);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.loading !== this.state.loading) {
      this.setState({ loading: newProps.loading });
    }
  }
  placeRequest() {
    this.setState({ placed: false });
    this.props.requestToOrderDispatch(this.props.match.params.id3);
    alert(
      "Request has been made! Please check email for further notifications."
    );
  }
  render() {
    let html = <h3>No Information available.</h3>;
    let additional = <br />;
    if (this.props.product) {
      if (this.props.product.attributes) {
        let list = this.props.product.attributes.map((attr, i) => {
          return (
            <tr>
              <td>{attr.key}:</td>
              <td>{attr.val}</td>
            </tr>
          );
        });
        additional = (
          <div>
            Additional Information
            {list}
            <hr />
          </div>
        );
      }
      html = (
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col"}>
              <img
                src={this.props.product.image}
                alt={"Product"}
                width={"250px"}
                height={"300px"}
                align="left"
              />
            </div>
            <div className={"col"} align="left">
              <h3>Product Name: {this.props.product.name}</h3>
              <h5>Product Description: {this.props.product.description}</h5>
              <hr />
              {additional}
              <button className="btn btn-default" onClick={this.placeRequest}>
                Place Request
              </button>
            </div>
          </div>
        </div>
      );
    }
    return <div>{html}</div>;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    product: state.categoryReducer.product,
    loading: state.categoryReducer.loading,
    request: state.categoryReducer.request,
    placed: state.categoryReducer.placed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductDispatch: id => dispatch(loadProduct(id)),
    requestToOrderDispatch: productId => dispatch(requestToOrder(productId))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewProduct)
);
