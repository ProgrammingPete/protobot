

import React, { Component } from 'react';
import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import { axios } from "axios";

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			tradingData: []
		};
	}

	/*
	function parseData() {
		const { tradingData } = this.state;
		tradingData.map(item => {
			item.Open_Time = item.Open_Time;
			item.Close_Price = +item.Close_Price;
			item.Open_Price = +item.Open_Price;
			item.High = +item.High;
			item.Low = +item.Low;
			item.Volume = +item.Volume;

			return item;
		})
	}
	*/

	getTradingData(){
		axios.get("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/update")
			.then(response => {
				this.setState({
					tradingData: response.data.Trading_Info
				});
			})
			.catch(error => console.log("Axios Error: ", error));
	}
}