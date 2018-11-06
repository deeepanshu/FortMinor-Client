import React from 'react';
import BasicForm from "./Forms/BasicForm";
import axios from "axios";
import FinalStep from "./Forms/FinalStep";
const _ = require("lodash");
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            user:{}
        };
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.basicFormSubmit = this.basicFormSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.match.path === "/register/verify/:token") {
            let token = this.props.match.params.token;
            let request_url2 = "/auth/reverse/verify/";
            request_url2 += token;
            var that = this;
            axios
                .get(request_url2)
                .then(
                    function(response) {
                        console.log(response.data);
                        let responseStatus = response.data.status;
                        if (responseStatus === 2) {
                            let verifiedUser = that.state.user;
                            verifiedUser = response.data.verify;
                            that.setState({ user: verifiedUser });
                        }
                        if (responseStatus === 0) {
                            alert("Link Expired");
                            that.props.history.push("/login");
                        }
                        console.log(that.state);
                    },
                    function(reject) {
                        console.log(reject);
                    }
                )
                .catch(reason => console.log(reason));
        }
    }

    basicFormSubmit(e) {
        e.preventDefault();
        console.log(e.target.fullName.value);
        let fullName = e.target.fullName.value;
        let contact = e.target.contact.value;
        let organisationName = e.target.organisationName.value;
        let password = e.target.password.value;
        let that = this;

        const user = {
            fullName: fullName,
            contact: contact,
            email: this.state.user.userID,
            organisationName: organisationName,
            password: password
        };

        let request_url = "/auth/add/user/basic";

        axios.post(request_url, { user }).then(function(response) {
            console.log(response.data);
            let user = that.state.user;
            user = response.data;
            that.setState({ user: user });
            that.nextStep();
            console.log(that.state);
        }).catch((err)=>console.log(err));
    }
    nextStep() {
        this.setState({
            step: this.state.step + 1
        });
    }

    finalStep(){
        setTimeout(5000);
        this.props.history.push('/')
    }

    previousStep() {
        this.setState({
            step: this.state.step - 1
        });
    }

    render(){
        switch (this.state.step) {
            case 1 :
                return (
                    <BasicForm
                        user={this.state.user}
                        handleFormSubmit = {this.basicFormSubmit}
                        nextStep = {this.nextStep}
                        previousStep = {this.previousStep}
                    />
                );
            case 2:
                return (
                    <FinalStep/>
                );
            default:
                return (
                    <h3>Nothing to show man!</h3>
                )
        }
    }
}

export default Register;