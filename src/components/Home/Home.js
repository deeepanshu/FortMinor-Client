import React from "react";
import CategoryPanel from "./CategoryBrowse/CategoryBrowse";
import { loadCategories } from "../../actions";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import Carousel from "../Carousel/Carousel";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.loadCategoriesDispatch();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading !== this.state.loading) {
      this.setState({ loading: newProps.loading });
    }
  }

  render() {
    return (
      <div>
        <Carousel carousel={carousel} />
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Route
            exact
            path={"/"}
            render={props => (
              <div>
                <br />
                <br />
                <br />
                <h3 className={"text-center"}>What We Provide</h3>
                <br />
                <br />
                <CategoryPanel {...props} categories={this.props.categories} />
              </div>
            )}
          />
        )}
      </div>
    );
  }
}
const carousel = [
  {
    carouselLink:
      "https://www.construct-ed.com/wp-content/uploads/2017/07/construction-jobs-list-hero-img01.png"
  },
  {
    carouselLink:
      "http://deltraconstruction.com/wp-content/uploads/2018/04/sli1.jpg"
  },
  {
    carouselLink:
      "http://www.bgconstructiontexas.com/img/services/construction-process-sm.v1.jpg"
  }
];
function mapStateToProps(state) {
  return {
    categories: state.categoryReducer.category,
    loading: state.categoryReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategoriesDispatch: () => dispatch(loadCategories())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
