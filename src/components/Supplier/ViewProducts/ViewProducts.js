import React from "react";
import Spinner from "../../Spinner/Spinner";
import ProductTable from "./ProductTable";
import AddProduct from "../AddProduct/AddProduct";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { addProduct, loadProducts } from "../../../actions/index";
import ViewProduct from "./ViewProduct";
class ViewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAdd: false,
      loading: false,
      base64: "",
      newProductAdditional: [],
      toggleAddMore: false
    };

    this.toggleAddForm = this.toggleAddForm.bind(this);
    this.cancelAddForm = this.cancelAddForm.bind(this);
    this.submitAddForm = this.submitAddForm.bind(this);
    this.getImageBase64 = this.getImageBase64.bind(this);
    this.toggleAddMore = this.toggleAddMore.bind(this);
    this.additionalInfoAdd = this.additionalInfoAdd.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.loadProductsDispatch(this.props.match.params.id);
  }

  getImageBase64(b64) {
    this.setState({ base64: b64 });
  }

  toggleAddForm(e) {
    console.log("asd");
    e.preventDefault();
    this.setState({ toggleAdd: !this.state.toggleAdd });
  }
  toggleAddMore(e) {
    console.log("asded");
    e.preventDefault();
    this.setState({ toggleAddMore: !this.state.toggleAddMore });
  }

  cancelAddForm(e) {
    e.preventDefault();
    this.setState({ toggleAdd: false });
  }

  additionalInfoAdd(key, val) {
    let pairs = [{ key, val }, ...this.state.newProductAdditional];
    this.setState({ newProductAdditional: pairs });
    console.log(pairs);
    this.setState({ toggleAddMore: !this.state.toggleAddMore });
  }

  submitAddForm(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(this.state.newProductAdditional);
    let product = {
      name: e.target.name.value,
      description: e.target.description.value,
      categoryID: this.props.subCategory.categoryID,
      subCategoryID: this.props.match.params.id,
      image: this.state.base64 ? this.state.base64 : undefined,
      attributes: this.state.newProductAdditional
    };
    this.setState({ loading: true, toggleAdd: false });
    this.props.addProductDispatch(product);
    this.setState({ base64: "", newProductAdditional: [] });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading !== this.state.loading) {
      this.setState({ loading: newProps.loading });
    }
  }
  render() {
    let title = <h3>No Information1</h3>;
    let productHTML = <h3>No Information2</h3>;

    if (this.props.subCategory) {
      title = (
        <div>
          <h3>
            Sub-Category Information{" "}
            <span style={{ float: "right" }}>
              <button className="btn btn-default" onClick={this.toggleAddForm}>
                &#43; Add Product
              </button>
            </span>
          </h3>
          <div className={"row"}>
            <div className={"col-md-3"}>
              <img
                src={this.props.subCategory.image}
                width={"100px"}
                alt={"SubCategory"}
                height={"100px"}
              />
            </div>
            <div className={"col-md-9"}>
              <h5>Name: {this.props.subCategory.name}</h5>
              <h5>Description: {this.props.subCategory.description}</h5>
              <h5>Slug: {this.props.subCategory.slug}</h5>
            </div>
          </div>
          <br />
        </div>
      );
      productHTML = (
        <ProductTable
          products={this.props.subCategory.product}
          categoryID={this.props.subCategory.categoryID}
          subCategoryID={this.props.subCategory._id}
        />
      );
    }

    return (
      <Switch>
        <Route
          exact
          path={"/supplier/subcategory/:id"}
          render={props => (
            <div className="container">
              {this.props.loading ? (
                <Spinner />
              ) : (
                <div>
                  {title}
                  <hr />
                  {this.state.toggleAdd && (
                    <AddProduct
                      getImageBase64={this.getImageBase64}
                      cancel={this.cancelAddForm}
                      submit={this.submitAddForm}
                      base64={this.base64}
                      toggleAddMore={this.state.toggleAddMore}
                      toggleAddMoreHandler={this.toggleAddMore}
                      additionalInfoAdd={this.additionalInfoAdd}
                      additional={this.state.newProductAdditional}
                    />
                  )}
                  <br />
                  {this.props.subCategory && productHTML}
                </div>
              )}
            </div>
          )}
        />
        <Route path="/supplier/subcategory/:id/:id2" component={ViewProduct} />
      </Switch>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    subCategory: state.categoryReducer.subCategorySpecefic,
    loading: state.categoryReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductsDispatch: id => dispatch(loadProducts(id)),
    addProductDispatch: subcategory => dispatch(addProduct(subcategory))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewProducts)
);
