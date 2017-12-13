import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon, Container } from 'semantic-ui-react';

import '../styles/component-TopMenu.scss';


export class TopMenu extends React.Component {
	render() {
		return (
			<div className='component-TopMenu'>
				<Container text>
					<Menu borderless>
						<Menu.Item as={Link} to='/'>
							<Icon name='home'/>
							Home
						</Menu.Item>
						<Menu.Item as={Link} to='/showcase'>
							<Icon name='block layout'/>
							Showcase
						</Menu.Item>
						<Menu.Item as={Link} to='/data'>
							<Icon name='database'/>
							Data Fetch
						</Menu.Item>
						<Menu.Item as={Link} to='/lazy'>
							<Icon name='download'/>
							Lazy Load
						</Menu.Item>
						<Menu.Item as={Link} to='/404'>
							<Icon name='warning circle'/>
							Not Found
						</Menu.Item>
					</Menu>
				</Container>
			</div>
		);
	}
}
