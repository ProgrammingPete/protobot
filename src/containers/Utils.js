import React, { Component } from 'react';
import { csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.Close_Price = +d.Close_Price;
		d.Close_time = parse(d.Close_time);
		d.High = +d.High;
		d.Low = +d.Low;
		d.Open_Price = +d.Open_Price;
		d.Open_Time = parse(d.Open_Time);
		d.Volume = +d.Volume;

		return d;
	};
}

const parseDate = timeParse("%Y/%m/%d %H:%M:%S");

export function getBTCDayTradingData(){
	/* Function to grab historical data for the past week of bitcoin */
	const tradingData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/btcOneDay")
	.then(response => response.text())
	.then(data => csvParse(data, parseData(parseDate)))
	.catch(error => console.log(error))
return tradingData;
}

export function getBTCWeeklyTradingData(){
	/* Function to grab historical data for the past week of bitcoin */
	const tradingData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/btcOneWeek")
	.then(response => response.text())
	.then(data => csvParse(data, parseData(parseDate)))
	.catch(error => console.log(error))
return tradingData;
}

export function getBTCMonthlyTradingData(){
	/* Function to grab historical data for the past week of bitcoin */
	const tradingData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/btcOneMonth")
	.then(response => response.text())
	.then(data => csvParse(data, parseData(parseDate)))
	.catch(error => console.log(error))
return tradingData;
}

export function getETHDayTradingData(){
	/* Function to grab historical data for the past week of bitcoin */
	const tradingData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/ethOneDay")
	.then(response => response.text())
	.then(data => csvParse(data, parseData(parseDate)))
	.catch(error => console.log(error))
return tradingData;
}

export function getETHWeeklyTradingData(){
	/* Function to grab historical data for the past week of bitcoin */
	const tradingData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/ethOneWeek")
	.then(response => response.text())
	.then(data => csvParse(data, parseData(parseDate)))
	.catch(error => console.log(error))
return tradingData;
}

export function getETHMonthlyTradingData(){
	/* Function to grab historical data for the past week of bitcoin */
	const tradingData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/ethOneMonth")
	.then(response => response.text())
	.then(data => csvParse(data, parseData(parseDate)))
	.catch(error => console.log(error))
return tradingData;
}

export function getCurrentBitcoinData(){
	//Function to grab current high price, low price, indicator etc. 
	const currentData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/update")
	.then(response => response.json())
	.then(responseJson => responseJson.Trading_Info)
return currentData;
}

export function getCurrentEthereumData(){
	//Function to grab current high price, low price, indicator etc. for Ethereum
	const currentData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/update?pair=ETHUSDT")
	.then(response => response.json())
	.then(responseJson => responseJson.Trading_Info)
return currentData;
}
