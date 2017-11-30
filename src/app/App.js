import React from 'react';
import autobind from 'core-decorators/es/autobind';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, Button } from 'semantic-ui-react';
import asyncComponent from './components/AsyncComponent';
import { LazyLoadLoadingView } from './components/LazyLoadLoadingView';
import { Footer } from './components/Footer';
import { SidebarMenu } from './components/SidebarMenu';
import { HomeView } from './views/HomeView';
import { ShowcaseView } from './views/ShowcaseView';
import { NotFoundView } from './views/NotFoundView';
import { LazyLoadFailView } from './views/LazyLoadFailView';

import '../assets/vendor.scss';
import './styles/_global.scss';
import './styles/component-sidebarButton.scss';


// =================
//  DYANMIC IMPORTS
// =================

// Function to simulate sleep
const sleep = function(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
}

// Dynamically import LazyLoadView component
const LazyLoadView = asyncComponent(async () => {
	// Delay component load by 2 seconds to show loading view
	await sleep(2000);

	// Dynamically import the component
	return import(/* webpackChunkName: "LazyLoadView" */'./views/LazyLoadView')
		.then(module => module.default)
		.catch(() => LazyLoadFailView)
}, <LazyLoadLoadingView/>);

// =====================
//  END DYANMIC IMPORTS
// =====================


@autobind
class App extends React.Component {
	state = {
		sidebarVisible: false
	}

	toggleSidebar() {
		this.setState((prevState) => {
			return { sidebarVisible: !prevState.sidebarVisible };
		});
	}

	render() {
		return (
			<BrowserRouter>
				<SidebarMenu visible={this.state.sidebarVisible} toggleSidebar={this.toggleSidebar}>
					<Transition visible={!this.state.sidebarVisible} animation='fade right' duration={500}>
						<Button size='massive' className='component-sidebarButton' icon='content' onClick={this.toggleSidebar}/>
					</Transition>
					
					{/* Routes */}
					<Switch>
						<Route exact path='/' component={HomeView}/>
						<Route exact path='/showcase' component={ShowcaseView}/>
						<Route exact path='/lazy' component={LazyLoadView}/>
						<Route component={NotFoundView}/>
					</Switch>
					
					<Footer/>
				</SidebarMenu>
			</BrowserRouter>
		);
	}
}


export default App;
