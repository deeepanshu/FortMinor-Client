import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addCategory, loadCategories} from "../../../actions/index";
import AddCategory from './CategoryHelpers/AddCategory';
import CategoryTable from "./CategoryHelpers/CategoryTable";
import SubCategory from "./SubCategory/SubCategory";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleAdd: false,
            base64:"",
            loading:false
        }
        this.toggleAddForm = this.toggleAddForm.bind(this);
        this.cancelAddForm = this.cancelAddForm.bind(this);
        this.submitAddForm = this.submitAddForm.bind(this);
        this.getImageBase64 = this.getImageBase64.bind(this);
    }

    componentDidMount() {
        this.props.loadCategoryDispatch();
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
        let category = {
            name: e.target.name.value,
            description: e.target.description.value,
            image:this.state.base64 ? this.state.base64 : undefined
        };
        this.props.addCategoryDispatch(category);
        this.setState({base64:""});
    }

    render() {
        return (
            <Switch>
                <Route  exact path={"/admin/category"} render={
                    (props) => <CategoryDashboard {...props}
                                                  toggleAdd={this.state.toggleAdd}
                                                  toggleAddForm={this.toggleAddForm}
                                                  category={this.props.category}
                                                  cancelAddForm = {this.cancelAddForm}
                                                  submitAddForm={this.submitAddForm}
                                                  getImageBase64 = {this.getImageBase64}
                                                  base64={this.state.base64}
                    />
                }/>
                <Route path={"/admin/category/:id"} component={SubCategory}/>
            </Switch>
        )
    }
};

const CategoryDashboard = (props) => {
    return (
        <div className="container">
            <h3>Categories <span style={{"float": "right"}}><button className="btn btn-default"
                                                                    onClick={props.toggleAddForm}>&#43; Add More</button></span>
            </h3>
            <hr/>
            {props.toggleAdd && (
                <AddCategory
                    cancel={props.cancelAddForm}
                    submit={props.submitAddForm}
                    getImageBase64 = {props.getImageBase64}
                    base64={props.base64}/>
            )}
            <br/>
            <CategoryTable categories={props.category}/>
        </div>
    )
};


function mapStateToProps(state) {
    return ({
        category: state.categoryReducer.category
    })
}

function mapDispatchToProps(dispatch) {
    return {
        loadCategoryDispatch: () => dispatch(loadCategories()),
        addCategoryDispatch: (category) => dispatch(addCategory(category))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));