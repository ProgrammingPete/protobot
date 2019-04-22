import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";



class App extends Component {
render() {
  return (
	<div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
         <Navbar.Brand>
            <Link to="/">ProtoBot</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="justify-content-end" />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
            <LinkContainer to="/data">
            <NavItem>Data</NavItem>
            </LinkContainer>
            <LinkContainer to="/chart">
            <NavItem>Chart</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
	
    
  );
}

}

export default App;
