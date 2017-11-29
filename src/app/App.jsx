import React from 'react';
import autobind from 'core-decorators/es/autobind';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, Button } from 'semantic-ui-react';
import asyncComponent from './components/AsyncComponent';
import { SidebarMenu } from './components/SidebarMenu';
import { HomeView } from './views/HomeView';
import { NotFoundView } from './views/NotFoundView';

import './styles/_semantic.scss';


// Dynamically import components
const LazyLoadView = asyncComponent(() => 
	import(/* webpackChunkName: "LazyLoadView" */'./views/LazyLoadView').then(module => module.default)
);

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
				<SidebarMenu visible={this.state.sidebarVisible} style={{height:'100%'}} toggleSidebar={this.toggleSidebar}>
					<Transition visible={!this.state.sidebarVisible} animation='fade right' duration={500}>
						<Button size='massive' style={{float:'left',margin:'0.5rem 0.5rem 0 0',background:'none',color:'white'}} icon='content' onClick={this.toggleSidebar}/>
					</Transition>
					
					{/* Routes */}
					<Switch>
						<Route exact path='/' component={HomeView}/>
						<Route exact path='/lazy' component={LazyLoadView}/>
						<Route component={NotFoundView}/>
					</Switch>

				</SidebarMenu>
			</BrowserRouter>
		);
	}
}


export default App;
