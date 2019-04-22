import React, {Component} from "react";
import "./Login.css";
import axios from 'axios'
import { render } from 'react-dom';
import Chart from './Chart';
import { getTradingData } from "./Utils"
import { TypeChooser } from "react-stockcharts/lib/helper"

export default class Data extends React.Component {
    componentDidMount(){
       getTradingData().then(data => {
           this.setState({ data })
       })
	}


    render(){
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<div className="chart">
            <h1>Test Chart of One Week</h1>
				<TypeChooser>
					{type => <Chart type={type} data={this.state.data} />}
				</TypeChooser>
			</div>
			)
	}
}
    
