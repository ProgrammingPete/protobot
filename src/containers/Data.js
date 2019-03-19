import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.css";
import axios from 'axios'

export default class Data extends Component {
    state = {
        data: []
    };

    componentDidMount(){
        axios.get("http://protoserver.centralus.cloudapp.azure.com:5678/api/v1.0/update")
            .then(response => response.data)
            .then(data => this.setState({data}));
    }


   render(){ 
    return (
        <table>
            <tbody>
                <tr>
                    {
                        this.state.data.map(function(item){
                        return <td key={item.SMA-10}>{item.SMA-10} - {item.SMA-20}</td>;
                        })
                    }
                </tr>
            </tbody>
        </table>
      );
    }
  }
