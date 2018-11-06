import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addProduct, loadProducts} from "../../../../../actions/index";
import AddProduct from "./ProductHelpers/AddProduct";
import Spinner from "../../../../Spinner/Spinner";
import ProductTable from "./ProductHelpers/ProductTable"
import SpecificProduct from "./SpecificProduct/SpecificProduct";


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleAdd: false,
            loading: false,
            base64: ""
        };
        this.toggleAddForm = this.toggleAddForm.bind(this);
        this.cancelAddForm = this.cancelAddForm.bind(this);
        this.submitAddForm = this.submitAddForm.bind(this);
        this.getImageBase64 = this.getImageBase64.bind(this);
    }

    componentDidMount() {
        this.setState({loading: true});
        this.props.loadProductsDispatch(this.props.match.params.id2);
    }

    getImageBase64(b64) {
        this.setState({base64: b64});
    }

    toggleAddForm(e) {
        e.preventDefault();
        this.setState({toggleAdd: !this.state.toggleAdd});
    }

    cancelAddForm(e) {
        e.preventDefault();
        this.setState({toggleAdd: false});
    }

    submitAddForm(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        let product = {
            name: e.target.name.value,
            description: e.target.description.value,
            categoryID: this.props.match.params.id,
            subCategoryID: this.props.match.params.id2,
            image: this.state.base64 ? this.state.base64 : undefined
        };
        this.setState({loading: true, toggleAdd: false});
        this.props.addProductDispatch(product);
        this.setState({base64: ""});
    }

    componentWillReceiveProps(newProps) {
        if (newProps.loading !== this.state.loading) {
            this.setState({loading: newProps.loading});
        }
    }

    render() {
        console.log(this.props.match.params)
        return (
            <Switch>
                <Route exact path={"/admin/category/:id/:id2"} render={
                    (props) => <ProductDashboard  {...props}
                                                  subCategorySpecefic={this.props.subCategorySpecefic}
                                                  toggleAddForm={this.toggleAddForm}
                                                  cancelAddForm={this.cancelAddForm}
                                                  submitAddForm={this.submitAddForm}
                                                  loading={this.state.loading}
                                                  toggleAdd={this.state.toggleAdd}
                                                  categoryID={this.props.match.params.id}
                                                  getImageBase64={this.getImageBase64}
                                                  base64={this.state.base64}
                    />
                }/>
                <Route path={"/admin/category/:id/:id2/:id3"} component={SpecificProduct}/>
            </Switch>


        )
    }

}

const ProductDashboard = (props) => {
    let title = (
        <h3>No Information1</h3>
    );
    let productHTML = (<h3>No Information2</h3>);

    if (props.subCategorySpecefic) {
        title = (
            <div>
                <h3>Sub-Category Information <span style={{"float": "right"}}><button className="btn btn-default"
                                                                                      onClick={props.toggleAddForm}>&#43; Add Product</button></span>
                </h3>
                <div className={"row"}>
                    <div className={"col-md-3"}>
                        <img src={props.subCategorySpecefic.image} width={"100px"} alt={"SubCategory"} height={"100px"}/>
                    </div>
                    <div className={"col-md-9"}>
                        <h5>Name: {props.subCategorySpecefic.name}</h5>
                        <h5>Description: {props.subCategorySpecefic.description}</h5>
                        <h5>Slug: {props.subCategorySpecefic.slug}</h5>
                    </div>
                </div>
                <br/>
            </div>
        );
        productHTML = (<ProductTable products={props.subCategorySpecefic.product}
                                     categoryID={props.categoryID}
                                     subCategoryID={props.subCategorySpecefic._id}/>);
    }


    return (
        <div className="container">
            {props.loading ? (<Spinner/>) : (
                <div>
                    {title}
                    <hr/>
                    {props.toggleAdd && (
                        <AddProduct
                            getImageBase64={props.getImageBase64}
                            cancel={props.cancelAddForm}
                            submit={props.submitAddForm}
                            base64={props.base64}/>

                    )}
                    <br/>
                    {props.subCategorySpecefic && productHTML}
                </div>
            )}

        </div>
    )
}


function mapStateToProps(state) {
    console.log(state);
    return ({
        subCategorySpecefic: state.categoryReducer.subCategorySpecefic,
        loading: state.categoryReducer.loading
    })
}

function mapDispatchToProps(dispatch) {
    return {
        loadProductsDispatch: (id) => dispatch(loadProducts(id)),
        addProductDispatch: (subcategory) => dispatch(addProduct(subcategory))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
