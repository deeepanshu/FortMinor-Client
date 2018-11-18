import React from "react";
// import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadCategories } from "../../../actions";
import Spinner from "../../Spinner/Spinner";
import axios from "axios";
class MakeChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: [],
      loading: false,
      categoryList: [],
      subCategoryList: []
    };
    this.chechboxOnChange = this.chechboxOnChange.bind(this);
    this.saveButton = this.saveButton.bind(this);
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

  chechboxOnChange(e) {
    console.log(e.target.checked);
    let selecteds = this.state.selections;
    if (e.target.checked) {
      selecteds.push(e.target.value);
    } else {
      selecteds = selecteds.filter(id => id !== e.target.value);
    }
    this.setState({ selections: selecteds });
  }

  saveButton(e) {
    e.preventDefault();
    if (this.state.selections.length > 5) {
      return alert(
        `You can have only 5 choices, remove ${this.state.selections.length -
          5} choices to continue.`
      );
    } else if (this.state.selections.length < 5) {
      return alert(
        `You can have only 5 choices, add ${5 -
          this.state.selections.length} choices to continue.`
      );
    } else {
      let decision = window.confirm("haha");
      this.setState({ loading: true });
      if (decision) {
        axios
          .post("/api/add/supplier/categories", {
            categories: this.state.selections
          })
          .then(res => {
            this.setState({ loading: false });
          })
          .catch(err => console.log(err));
      }
    }
  }

  render() {
    let list = (
      <div>
        <Spinner />
      </div>
    );
    if (this.props.categories) {
      list = (
        <div>
          <h2>Select any 5 subcategories to begin with:</h2>
          <h3>
            Selections so far: {this.state.selections.length}
            /5
          </h3>
          <div id="accordion">
            <ExpandCards
              categories={this.props.categories}
              checkOnChange={this.chechboxOnChange}
            />
          </div>
          <button className="btn btn-default" onClick={this.saveButton}>
            Save
          </button>
        </div>
      );
    }
    return (
      <div className="container">
        <div>{list}</div>
      </div>
    );
  }
}
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

const ExpandCards = props => {
  return props.categories.map((category, i) => (
    <div className="card" key={i}>
      <div className="card-header" id={`h${category.slug}`}>
        <h3 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target={`#${category.slug}`}
            aria-expanded="true"
            aria-controls={`${category.slug}`}
          >
            {category.name}
          </button>
        </h3>
      </div>

      <div
        id={`${category.slug}`}
        className="collapse show"
        aria-labelledby={`h${category.slug}`}
        data-parent="#accordion"
      >
        <div className="card-body">
          <Checkboxes
            subcategories={category.subcategory}
            checkOnChange={props.checkOnChange}
          />
        </div>
      </div>
    </div>
  ));
};

const Checkboxes = props => {
  return props.subcategories.map((subcategory, i) => (
    <div key={i}>
      <input
        type="checkbox"
        value={subcategory._id}
        onChange={props.checkOnChange}
        defaultChecked={false}
      />
      {subcategory.name}
    </div>
  ));
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MakeChoices)
);
