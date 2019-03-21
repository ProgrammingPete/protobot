import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.css";
import axios from 'axios'

export default class Data extends React.Component {
    state = {
        tradingData: [],
        isLoading: true,
        errors: null
    };

    getTradingData(){
        axios.get("http://protoserver.centralus.cloudapp.azure.com:80/api/v1.0/update")
            .then(response => {
                this.setState({
                    tradingData: response.data.Trading_Info,
                    isLoading: false
                });
            })
            .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount(){
        this.getTradingData();
    }


    render(){
        const {isLoading, tradingData} = this.state;
        return(
            <React.Fragment>
                <h2>Trading Data</h2>
                <div>
                    {!isLoading ? (
                        tradingData.map(item =>{
                            const{Close_Price, Close_time, High, Low} = item;
                            return(
                                <div>
                                    <h2>{Close_Price}</h2>
                                    <p>{Close_time}</p>
                                    <p>{High}</p>
                                    <p>{Low}</p>
                                    <hr />
                                </div>
                            );
                        })
                    ):(
                        <p>Loading...</p>
                    ) 
                    }
                </div>
            </React.Fragment>
        );
    }
  }
