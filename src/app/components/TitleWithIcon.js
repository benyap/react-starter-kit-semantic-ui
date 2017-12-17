import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { Header, Icon } from 'semantic-ui-react'

import '../styles/component-Title--icon.scss';


export class TitleWithIcon extends React.Component {
	static propTypes = {
		text: PropTypes.string,
		subtext: PropTypes.any,
		icon: PropTypes.string,
	}

	_expandTopMenu() {
		const menu = document.getElementById('top-menu');
		menu.classList.remove('reduced');
	}

	_reduceTopMenu() {
		const menu = document.getElementById('top-menu');
		menu.classList.add('reduced');
	}
	
	render() {
		const { text, subtext, icon, children } = this.props;

		return (
			<div className='component-Title--icon'>
				<Header as='h1' icon textAlign='center'>
					<Waypoint scrollableAncestor={window} topOffset='10%' onEnter={this._expandTopMenu} onLeave={this._reduceTopMenu}/>
					<Icon name={icon}/>
					{text}
					<Header.Subheader>
						{subtext}
					</Header.Subheader>
				</Header>
				{children}
			</div>
		);
	}
}
