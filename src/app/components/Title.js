import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { Header } from 'semantic-ui-react'

import '../styles/component-Title.scss';
import '../../assets/images/background.jpg';


export class Title extends React.Component {
	static propTypes = {
		text: PropTypes.string,
		subtext: PropTypes.any,
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
		const { text, subtext, children } = this.props;
		
		return (
			<div className='component-Title'>
				<Header as='h1' textAlign='center'>
					<Waypoint scrollableAncestor={window} topOffset='10%' onEnter={this._expandTopMenu} onLeave={this._reduceTopMenu}/>
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
