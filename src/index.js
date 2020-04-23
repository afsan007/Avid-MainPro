import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./router";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route />
		</Router>
	</React.StrictMode>,
	rootElement
);

serviceWorker.register();
