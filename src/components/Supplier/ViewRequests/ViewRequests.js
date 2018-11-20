import React from "react";
import { loadRequestsForCurrentSupplier } from "../../../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class ViewRequests extends React.Component {
  componentDidMount() {
    this.props.loadRequestsForCurrentSupplierDispatch();
  }
  render() {
    return (
      <div className="container">
        <h2>Orders made on your products:</h2>
        <hr />
        <RequestListGroups requests={this.props.requests} />
        <br />
      </div>
    );
  }
}

const RequestListGroups = props => {
  return (
    <ul class="list-group">
      <RequestList requests={props.requests} />
    </ul>
  );
};

const RequestList = props => {
  if (props.requests) {
    return props.requests.map((request, i) => (
      <li class="list-group-item">
        Order By: <b>{request.requestedBy.fullName}</b>
        &nbsp;&nbsp; Order: <b>{request.product.name}</b>
        &nbsp;&nbsp; Date of Order:
        <b>
          {" "}
          {`${request.timeOfOrder.split("T")[0]} ${
            request.timeOfOrder.split("T")[1].split(".")[0]
          }`}
        </b>
        <span style={{ float: "right" }}>
          {request.status === 0 ? (
            <div>
              <button className="btn btn-success">Confirm</button>
              &nbsp;&nbsp;
              <button className="btn btn-danger">Cancel</button>
            </div>
          ) : request.status === 1 ? (
            <p style={{ "background-color": "#25ac00" }}>
              <b>&nbsp;Success&nbsp;</b>
            </p>
          ) : (
            <p style={{ "background-color": "#ff000c" }}>
              <b>&nbsp;Cancelled&nbsp;</b>
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
    loadRequestsForCurrentSupplierDispatch: () =>
      dispatch(loadRequestsForCurrentSupplier())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewRequests)
);
