import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import BTCData from "./containers/BTCData";
import ETHData from "./containers/ETHData";
import BTCMonthData from "./containers/BTCMonthData";
import ETHMonthData from "./containers/ETHMonthData";
import BTCDayData from "./containers/BTCDayData";
import ETHDayData from "./containers/ETHDayData";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path={'/signup'} exact component={Signup} />
    <Route path={'/BTCdata'} exact component={BTCData} />
    <Route path={'/ETHdata'} exact component={ETHData} />
    <Route path={'/BTCMonthData'} exact component={BTCMonthData} />
    <Route path={'/ETHMonthData'} exact component={ETHMonthData} />
    <Route path={'/BTCDayData'} exact component={BTCDayData} />
    <Route path={'/ETHDayData'} exact component={ETHDayData} />
    { /* Finally, catch all unmatched routes */ }
	  <Route component={NotFound} />
  </Switch>;
