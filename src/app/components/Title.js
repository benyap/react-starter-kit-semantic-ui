import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react'

import '../styles/component-Title.scss';


export class Title extends React.Component {
	static propTypes = {
		text: PropTypes.string,
		subtext: PropTypes.any,
	}

	render() {
		const { text, subtext, children } = this.props;
		
		return (
			<div className='component-Title'>
				<Header as='h1' textAlign='center'>
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
