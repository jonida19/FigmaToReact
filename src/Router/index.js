import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import MainPage from '../Components/MainPage';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/mainpage"><MainPage /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;