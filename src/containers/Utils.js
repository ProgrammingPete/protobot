import React, { Component } from 'react';
import { csvParse } from  "d3-dsv";
import { timeParse, timeFormat } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.index = +d.index;
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

export function getTradingData(){
	const tradingData = fetch("https://protoserver.centralus.cloudapp.azure.com/api/v1.0/btcOneWeek")
	.then(response => response.text())
	.then(data => csvParse(data, parseData(parseDate)))
return tradingData;
}