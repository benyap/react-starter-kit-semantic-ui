import React from 'react';
import autobind from 'core-decorators/es/autobind';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, Button } from 'semantic-ui-react';
import { SidebarMenu } from './components/SidebarMenu';
import { HomeView } from './views/HomeView';
import { LazyLoadView } from './views/LazyLoadView';
import { NotFoundView } from './views/NotFoundView';


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
						<Route component={NotFoundView}/>
					</Switch>

				</SidebarMenu>
			</BrowserRouter>
		);
	}
}


export default App;
