import React from "react";
import {withRouter} from "react-router-dom"
class BasicForm extends React.Component {

    render() {


        console.log(this.props);
        let html = (
            <h1>Waiting for information...</h1>
        )

        if (this.props.user) {
            html = (
                <div
                    className="container">
                    < div
                        className="row">
                        < div
                            className="col-md-6"
                            style={
                                {
                                    padding: 100
                                }
                            }
                        >
                            Lets
                            Get
                            Started
                        </div>
                        <div
                            className="col-md-6"
                            style={{
                                padding: 100
                            }}
                        >
                            <form onSubmit={this.props.handleFormSubmit}>
                                <div className="form-group">
                                    <label className="form-check-label">Full Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        required="required"
                                        defaultValue={"" || ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-check-label">Email</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input
                                            className="form-control is-valid"
                                            type="email"
                                            name="email"
                                            required="required"
                                            readOnly
                                            onChange={this.handleChange}
                                            value={this.props.user ? this.props.user.userID :""}
                                            disabled="on"
                                        />
                                        {this.props.user.userID && (
                                        <div className="valid-feedback">Looks good!</div>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-check-label">Contact</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">+91</div>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="contact"
                                            placeholder="Contact"
                                            required="required"
                                            ref="contact"
                                            // pattern="^[0]?[789]\\d{9}$"
                                            defaultValue={""}
                                        />
                                    </div>
                                    {/*{this.state.userVerified && (*/}
                                    {/*<div>*/}
                                    {/*<i className="fas fa-check greencheck"/>*/}
                                    {/*</div>*/}
                                    {/*)}*/}
                                    {/*{this.state.btnShow && (*/}
                                    {/*<div>*/}
                                    {/*<button*/}
                                    {/*className="btn btn-info verifyButton"*/}
                                    {/*onClick={this.verifyButton}*/}
                                    {/*>*/}
                                    {/*Verify*/}
                                    {/*</button>*/}
                                    {/*</div>*/}
                                    {/*)}*/}
                                    {/*{this.state.textField && (*/}
                                    {/*<div>*/}
                                    {/*<br/>*/}
                                    {/*<input*/}
                                    {/*type="text"*/}
                                    {/*className="form-control"*/}
                                    {/*ref="otp"*/}
                                    {/*name="otp"*/}
                                    {/*defaultValue=""*/}
                                    {/*placeholder="Enter OTP Recieved on your phone"*/}
                                    {/*onChange={this.handleOtpInput}*/}
                                    {/*/>*/}
                                    {/*</div>*/}
                                    {/*)}*/}
                                </div>
                                <div className="form-group">
                                    <label className="form-check-label">Organisation Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="organisationName"
                                        placeholder="Organisation Name"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-check-label">Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required="required"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-check-label">Enter Password Again</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Password"
                                        required="required"
                                        defaultValue={""}
                                    />
                                </div>
                                {/*{this.state.phoneVerified ? (*/}
                                {/*<button className="btn btn-primary">Submit</button>*/}
                                {/*) : }*/}
                                <button className="btn btn-primary" >
                                    Submit
                                </button>
                                &nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {html}
            </div>
        );
    }

}

export default withRouter(BasicForm);