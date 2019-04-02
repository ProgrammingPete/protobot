import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.css";
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        //axios.post("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/login", {
        axios.post("https://localhost:5678/api/v1.0/login", {
            email: this.state.email, 
            password: this.state.password,
    })
    .then((response) => {
        console.log(response.data)
    });
event.preventDefault();

};

    render() {
        return (
            <div className="Loginbox">
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
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
                    <Button
                        disabled={!this.validateForm()}
                        type="submit"
                        className="btn"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}
