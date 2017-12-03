import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react'

import '../styles/component-Title--icon.scss';


export class TitleWithIcon extends React.Component {
	static propTypes = {
		text: PropTypes.string,
		subtext: PropTypes.any,
		icon: PropTypes.string,
	}

	render() {
		const { text, subtext, icon, children } = this.props;

		return (
			<div className='component-Title--icon'>
				<Header as='h1' icon textAlign='center'>
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
