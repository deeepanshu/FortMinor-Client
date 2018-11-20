import React from "react";
import { loadRequestForCustomer } from "../../../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class ViewRequests extends React.Component {
  componentDidMount() {
    this.props.loadRequestForCustomerDispatch();
  }
  render() {
    return (
      <div className="container">
        <h3>Orders made by you:</h3>
        <hr />
        <RequestListGroups requests={this.props.requests} />
        <br />
      </div>
    );
  }
}

const RequestListGroups = props => {
  return <RequestList requests={props.requests} />;
};

const RequestList = props => {
  if (props.requests) {
    return props.requests.map((request, i) => (
      <li class="list-group-item">
        Order By: <b>{request.requestedBy.fullName}</b>
        &nbsp;&nbsp; Order: <b>{request.product.name}</b>
        &nbsp;&nbsp; Date of Order:
        <b> {request.timeOfOrder.split("T")[0]}</b>
        <span style={{ float: "right" }}>
          {request.status === 0 ? (
            <p style={{ "background-color": "#fbd600" }}>
              <b>&nbsp;Pending&nbsp;</b>
            </p>
          ) : (
            <p style={{ "background-color": "#20f200" }}>
              <b>&nbsp;In Process&nbsp;</b>
            </p>
          )}
        </span>
      </li>
    ));
  } else {
    return <h2>No Requests...</h2>;
  }
};

function mapStateToProps(state) {
  return {
    requests: state.categoryReducer.requests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadRequestForCustomerDispatch: () => dispatch(loadRequestForCustomer())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewRequests)
);
