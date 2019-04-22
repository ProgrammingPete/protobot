import React, {Component} from "react";
import "./Login.css";
import axios from 'axios'
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./Utils"
import { TypeChooser } from "react-stockcharts/lib/helper"

export default class Data extends React.Component {
    state = {
        tradingData: [],
        isLoading: true,
        errors: null
    };

    getTradingData(){
        axios.get("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/update")
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
		if (this.state.tradingData == null) {
			return <div>Loading...</div>
		}
		return (
			<div className="chart">
				<TypeChooser>
					{type => <Chart type={type} data={this.state.tradingData} />}
				</TypeChooser>
				<h1>Testing This Out</h1>
			</div>
			)
	}
}
    
