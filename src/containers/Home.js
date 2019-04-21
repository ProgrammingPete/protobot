import React, { Component } from "react";
import "./Home.css";
import './template.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>ProtoBot</h1>
          <p>Crypto Pricing Resource</p>
        </div>
      </div>
    );
  }
}
