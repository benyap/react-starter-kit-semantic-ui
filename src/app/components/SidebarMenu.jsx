import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import '../styles/component-sidebarMenu.scss';


export class SidebarMenu extends React.Component {
	static propTypes = {
		visible: PropTypes.bool.isRequired,
		toggleSidebar: PropTypes.func.isRequired,
	}

	render() {
		const { visible, toggleSidebar, children } = this.props;

		return (
			<Sidebar.Pushable className='component-sidebarMenu'>
				<Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
					<Menu.Item onClick={toggleSidebar}>
						<Icon name='remove'/>
					</Menu.Item>
					<Menu.Item as={Link} to='/' onClick={toggleSidebar}>
						<Icon name='home'/>
						Home
					</Menu.Item>
					<Menu.Item as={Link} to='/lazy' onClick={toggleSidebar}>
						<Icon name='download'/>
						Lazy Load
					</Menu.Item>
					<Menu.Item as={Link} to='/404' onClick={toggleSidebar}>
						<Icon name='warning circle'/>
						Not Found
					</Menu.Item>
				</Sidebar>
				<Sidebar.Pusher>
					{children}
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		);
	}
}
