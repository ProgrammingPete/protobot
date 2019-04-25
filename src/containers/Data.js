import React, {Component} from "react";
import "./Login.css";
import Chart from './Chart';
import { getTradingData, getCurrentData } from "./Utils";
import { TypeChooser } from "react-stockcharts/lib/helper";
import axios from 'axios';

export default class Data extends React.Component {	
	constructor(props) {
		super(props);
		
		this.state = {
			tradingData: [],
			currentData: [],
			isLoading: true,
			error: null,
		};
	}
	getHistoricalData(){
		getTradingData().then(data => {
			this.setState({ 
				tradingData: data,
				isLoading: false,
			});
		})
		}

	getData(){
		fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/update")
			.then(response => response.json())
			.then(result => 	
				this.setState({
					isLoading: false,
					currentData: result.Trading_Info.map(item => ({
						High: item.High,
						Low: item.Low,
						indicator: item.indicator,
					}))
			}))
			.catch(error => console.log("fetch error: ", error));
		}

	componentDidMount(){
		this.getHistoricalData();
	}

    render(){
		if (this.state.isLoading === true) {
			return <div><h3>Loading...</h3></div>
		}
		return (
			<div className="chart">
            <h1>Historical Data: 1 Week</h1>
				<TypeChooser>
					{type => <Chart type={type} data={this.state.tradingData} />}
				</TypeChooser>
				<button value="month">Month</button>
				<button value="week">Week</button>
				<button value="day">Day</button>
				<br/><br/>
			</div>
			);
	}
}
    
