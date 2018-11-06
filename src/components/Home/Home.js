import React from 'react';
import CategoryPanel from "./CategoryBrowse/CategoryBrowse";
import {loadCategories} from "../../actions";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Spinner from "../Spinner/Spinner";
import Carousel from "../Carousel/Carousel";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.props.loadCategoriesDispatch(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.loading !== this.state.loading) {
            this.setState({loading: newProps.loading});
        }
    }

    render() {
        return (
            <div>
                <Carousel carousel = {carousel}/>
                {this.state.loading ? (<Spinner/>) : (
                <Route exact path={"/"} render={
                    (props) => (
                        <div>
                            <br />
                            <br />
                            <br />
                            <h3 className={"text-center"}>What We Provide</h3>
                            <br />
                            <br />
                            <CategoryPanel {...props} categories={this.props.categories}/>
                        </div>)
                }/>)}
            </div>
        )
    }
}
const carousel = [
    {
        carouselLink:'https://via.placeholder.com/1400x600'
    },{
        carouselLink:'https://via.placeholder.com/1400x600'
    },{
        carouselLink:'https://via.placeholder.com/1400x600'
    }
]
function mapStateToProps(state) {
    return ({
        categories: state.categoryReducer.category,
        loading: state.categoryReducer.loading
    })
}

function mapDispatchToProps(dispatch) {
    return {
        loadCategoriesDispatch: () => dispatch(loadCategories()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
