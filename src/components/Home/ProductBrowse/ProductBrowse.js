import React from "react";
import { loadProducts } from "../../../actions";
import { withRouter, Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import ViewProduct from "../ViewProduct/ViewProduct";

class ProductBrowse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.loadProductsDispatch(this.props.match.params.id2);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.loading !== this.state.loading) {
      this.setState({ loading: newProps.loading });
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={"/browse/:id/:id2"}
            render={props => (
              <ProductPanel
                {...props}
                subcategory={this.props.subCategorySpecefic}
                categoryID={this.props.match.params.id}
              />
            )}
          />
          <Route
            path={"/browse/:id/:id2/:id3"}
            render={props => <ViewProduct />}
          />
        </Switch>
      </div>
    );
  }
}

const ProductPanel = props => {
  let cards = <h1>Nothing to show</h1>;
  if (props.subcategory) {
    console.log(cards);
    cards = props.subcategory.product.map((product, i) => (
      <SubCategoryCard
        product={product}
        key={i}
        categoryID={props.categoryID}
        subcategoryID={props.subcategory._id}
      />
    ));
  }
  return <div className={"container flexer"}>{cards}</div>;
};

const SubCategoryCard = props => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        width={"250px"}
        height={"275"}
        src={props.product.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.description}</p>
      </div>
      <div className="card-body">
        <Link
          to={`/browse/${props.categoryID}/${props.subcategoryID}/${
            props.product._id
          }`}
          className="card-link"
        >
          View
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    subCategorySpecefic: state.categoryReducer.subCategorySpecefic,
    loading: state.categoryReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductsDispatch: id => dispatch(loadProducts(id))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductBrowse)
);
