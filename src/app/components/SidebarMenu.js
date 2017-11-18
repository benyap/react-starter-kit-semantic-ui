import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';


class SidebarMenu extends React.Component {
	static propTypes = {
		visible: PropTypes.bool.isRequired,
		toggleSidebar: PropTypes.func.isRequired
	}

	render() {
		return (
			<Sidebar.Pushable style={{height:'inherit'}}>
				<Sidebar as={Menu} animation='overlay' width='thin' visible={this.props.visible} icon='labeled' vertical inverted>
					<Menu.Item onClick={this.props.toggleSidebar}>
						<Icon name='remove'/>
					</Menu.Item>
					<Menu.Item as={Link} to='/' onClick={this.props.toggleSidebar}>
						<Icon name='home'/>
						Home
					</Menu.Item>
					<Menu.Item as={Link} to='/404' onClick={this.props.toggleSidebar}>
						<Icon name='warning circle'/>
						Not Found
					</Menu.Item>
				</Sidebar>
				<Sidebar.Pusher style={{height:'100vh'}}>
					{this.props.children}
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		);
	}
}


export default SidebarMenu;
