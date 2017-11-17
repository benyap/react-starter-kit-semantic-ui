import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
}


export default App;
