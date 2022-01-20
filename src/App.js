import React, { Component } from "react" ;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./container/FirstPage/FirstPage";
import SecondPage from "./container/SecondPane/SecondPage";
import "./index.css" ;

class App extends Component {

	render() {
		return(
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={FirstPage} />
						<Route path="/app" component={SecondPage} />
					</Switch>
				</Router>
				
			</div>
		)
	}
}

export default App ;