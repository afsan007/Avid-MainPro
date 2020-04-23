import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CtrlCenter from "./component/controlCenter";
import FieldAgent from "./component/fieldAgent";
import App from "./component/root";
export default () => (
	<Switch>
		<Route path='/ctrl-center'>
			<CtrlCenter />
		</Route>
		<Route path='/field-agent'>
			<FieldAgent />
		</Route>
		<Route exact path='/'>
			<App />
		</Route>
		<Redirect to='/' />
	</Switch>
);
