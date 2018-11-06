import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addSubCategory, loadSubCategories} from "../../../../actions/index";
import AddSubCategory from "./SubCategoryHelpers/AddSubCategory";
import Spinner from "../../../Spinner/Spinner";
import SubCategoryTable from "./SubCategoryHelpers/SubCategoryTable"
import Product from "./Product/Product"

class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleAdd: false,
            loading: false,
            base64:""
        };
        this.toggleAddForm = this.toggleAddForm.bind(this);
        this.cancelAddForm = this.cancelAddForm.bind(this);
        this.submitAddForm = this.submitAddForm.bind(this);
        this.getImageBase64 = this.getImageBase64.bind(this);
    }

    componentDidMount() {
        this.setState({loading: true});
        this.props.loadSubCategoryDispatch(this.props.match.params.id);
    }

    getImageBase64(b64){
        this.setState({base64:b64});
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
        let subcategory = {
            name: e.target.name.value,
            description: e.target.description.value,
            categoryID: this.props.match.params.id,
            image:this.state.base64 ? this.state.base64 : undefined
        };
        this.setState({loading:true, toggleAdd:false});
        this.props.addSubCategoryDispatch(subcategory);
        this.setState({base64:""});
    }

    componentWillReceiveProps (newProps) {
        if( newProps.loading !== this.state.loading ){
            this.setState({loading: newProps.loading});
        }
    }

    render() {


        return (
            <Switch>
                <Route exact path={"/admin/category/:id"} render={
                    (props) => <SubCategoryDashboard {...props}
                                                     toggleAdd={this.state.toggleAdd}
                                                     toggleAddForm={this.toggleAddForm}
                                                     categorySpecefic={this.props.categorySpecefic}
                                                     cancelAddForm = {this.cancelAddForm}
                                                     submitAddForm={this.submitAddForm}
                                                     loading={this.state.loading}
                                                     getImageBase64 = {this.getImageBase64}
                                                     base64={this.state.base64}
                />}/>
                <Route path={"/admin/category/:id/:id2"} component={Product} />
            </Switch>

        )
    }

}

const SubCategoryDashboard = (props) => {
    let title = (
        <h3>No Information1</h3>
    );
    let subCategoryHTML = (<h3>No Information2</h3>);

    if (props.categorySpecefic) {
        title = (
            <div>
                <h3>Category Information <span style={{"float": "right"}}><button className="btn btn-default"
                                                                                  onClick={props.toggleAddForm}>&#43; Add Subcategory</button></span>
                </h3>
                <div className={"row"}>
                    <div className={"col-md-3"}>
                        <img src={props.categorySpecefic.image} alt={"Category"} width={"100px"} height={"100px"} />
                    </div>
                    <div className={"col-md-9"}>
                        <h5>Name: {props.categorySpecefic.name}</h5>
                        <h5>Description: {props.categorySpecefic.description}</h5>
                        <h5>Slug: {props.categorySpecefic.slug}</h5>
                    </div>
                </div>
                <br/>
            </div>
        );
        subCategoryHTML = (<SubCategoryTable subcategories={props.categorySpecefic.subcategory}
                                             categoryID={props.categorySpecefic._id}/>);
    }
    return (
        <div className="container">
            {props.loading ? <Spinner/> :(
                    <div>
                {title}
                <hr/>
                {props.toggleAdd && (
                    <AddSubCategory
                        cancel={props.cancelAddForm}
                        submit={props.submitAddForm}
                        getImageBase64 = {props.getImageBase64}
                        base64={props.base64}/>)}
                <br/>
                {props.categorySpecefic && subCategoryHTML}
                </div>
                )}

        </div>
    )
}


function mapStateToProps(state) {
    console.log(state);
    return ({
        categorySpecefic: state.categoryReducer.categorySpecefic,
        loading: state.categoryReducer.loading
    })
}

function mapDispatchToProps(dispatch) {
    return {
        loadSubCategoryDispatch: (id) => dispatch(loadSubCategories(id)),
        addSubCategoryDispatch: (subcategory) => dispatch(addSubCategory(subcategory))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubCategory));