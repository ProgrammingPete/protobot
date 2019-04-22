import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.css";
import axios from 'axios'
import withRouter from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'




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
        axios.post("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/login", {
        //axios.post("https://localhost:5678/api/v1.0/login", {
            email: this.state.email, 
            password: this.state.password,
    })
            .then((response) => {
                console.log("Response", response)
                if (response.data === 'success'){
                    this.props.history.push('/data')
                }
                else if (response.data === 'failure'){
                    this.props.history.push('/failure')
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
                    <h1>Login</h1>
                    <FormGroup controlId="email" className={"textbox"}>
                        <i className="fas fa-user"></i>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            placeholder={"Username"}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" className={"textbox"}>
                        <i className="fas fa-lock"></i>
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
					<Button
						type="submit"
						className="btn"
					>
						Forgot Password?
					</Button>
                </form>
            </div>
        );
    }
}
