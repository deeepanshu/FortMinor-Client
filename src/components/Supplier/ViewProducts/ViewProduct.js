import React, { Component } from "react";
import { loadProduct } from "../../../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class ViewProduct extends Component {
  componentDidMount() {
    console.log(this.props.match);
    this.props.loadProductDispatch(this.props.match.params.id2);
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
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {html}
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    product: state.categoryReducer.product,
    loading: state.categoryReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductDispatch: id => dispatch(loadProduct(id))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewProduct)
);
