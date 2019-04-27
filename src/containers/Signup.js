import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.css";
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            verifyPassword: "",
        };
    }

    validateForm() {
        return this.state.password === this.state.verifyPassword;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        axios.post('https://protoserver.centralus.cloudapp.azure.com/api/v1.0/create', {
        //axios.post('http://localhost:5678/api/v1.0/create', {
            email: this.state.email, 
            password: this.state.password,
    })
            .then((response) => {
                console.log("Response", response)
                if (response.data === 'success'){
                    this.props.history.push('/login')
                }
                else if (response.data === 'failure'){
                    return(
                        <div>
                            This User already exists, please try again.
                        </div>
                    )
                }
            })
            .catch((error) => {
                console.log("Axios Error", error)
            });
        event.preventDefault();

    };

    render() {
        return (
            <div className="Loginbox">
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up for Account</h1>
                    <FormGroup controlId="email" className={"textbox"}>
                        <i className="fas fa-user" aria-hidden="true"/>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            placeholder={"Username"}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" className={"textbox"}>
                        <i className="fas fa-user" aria-hidden="true"/>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder={"Password"}
                        />
                    </FormGroup>
                    <FormGroup controlId="verifyPassword" className={"textbox"}>
                        <i className="fas fa-user" aria-hidden="true"/>
                        <FormControl
                            value={this.state.verifyPassword}
                            onChange={this.handleChange}
                            type="password"
                            placeholder={"Re-Enter Password"}
                        />
                    </FormGroup>
                    <Button
                        disabled={!this.validateForm()}
                        type="submit"
                        className="btn"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        );
    }
}
