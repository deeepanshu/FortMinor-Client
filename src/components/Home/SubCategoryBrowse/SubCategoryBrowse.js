import React from 'react';
import {withRouter} from "react-router-dom";
import {Link, Route, Switch} from "react-router-dom"
import {loadSubCategories} from "../../../actions";
import {connect} from "react-redux";
import Spinner from "../../Spinner/Spinner";
import ProductBrowse from "../ProductBrowse/ProductBrowse";

class SubCategoryBrowse extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    componentDidMount(){
        this.setState({loading: true});
        this.props.loadSubCategoryDispatch(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.loading !== this.state.loading) {
            this.setState({loading: newProps.loading});
        }
    }
    render(){
        return (
            <div>
                {this.state.loading ? (<Spinner/>) : (
                    <Switch>
                        <Route exact path={"/browse/:id"} render={(props)=><SubCategoryPanel {...props} category={this.props.categorySpecefic}/>} />
                        <Route path={"/browse/:id/:id2"} component={ProductBrowse} />
                    </Switch>

                )}
            </div>
        );
    }
}

const SubCategoryPanel = props =>{
    let cards = (<h1>Nothing to show</h1>);
    if(props.category){
        cards = props.category.subcategory.map((subcategory, i) => (
            <SubCategoryCard subcategory={subcategory} key={i} categoryID={props.category._id}/>
        ))
    }
    return (
        <div className={"container flexer"}>
            {cards}
        </div>
    );
};

const SubCategoryCard = (props) =>{
    return (
        <div className="card" style={{"width":"18rem"}}>
            <img className="card-img-top" width={"250px"} height={"275"} src={props.subcategory.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.subcategory.name}</h5>
                <p className="card-text">{props.subcategory.description}</p>
            </div>
            <div className="card-body">
                <Link to={`/browse/${props.categoryID}/${props.subcategory._id}`} className="card-link">View</Link>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return ({
        categorySpecefic: state.categoryReducer.categorySpecefic,
        loading: state.categoryReducer.loading
    })
}

function mapDispatchToProps(dispatch) {
    return {
        loadSubCategoryDispatch: (id) => dispatch(loadSubCategories(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubCategoryBrowse));