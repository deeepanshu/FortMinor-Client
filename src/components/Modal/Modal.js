import React from "react";
import "./Modal.css";

const Modal = props => {
  console.log(props);
  return (
    <div className="col">
      <div className="text-left">
        <button
          type="button"
          className="btn btn-light"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Log In/ Sign Up
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">
                  Log In/Sign Up
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={props.signUpHandler}>
                  <div className="form-group">
                    <h4>Sign Up</h4>

                    <label htmlFor="email">Email address</label>
                    <div className="col-sm-8 input-group pb-modalreglog-input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user" />
                      </span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>
                <br />
                <h4>Log In</h4>
                {/*action="/auth/login/local" method="POST"*/}
                <form action="/auth/login/local" method="POST">
                  <div className="form-group">
                    <label htmlFor="username">Email address</label>
                    <div className="col-sm-8 input-group pb-modalreglog-input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Email"
                        defaultValue="ilikeitmyway1998@gmail.com"
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user" />
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="col-sm-8 input-group pb-modalreglog-input-group">
                      <input
                        type="password"
                        className="form-control"
                        id="pws"
                        name="password"
                        placeholder="Password"
                        defaultValue="qwert"
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-lock" />
                      </span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Log In
                  </button>
                </form>

                <br />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
