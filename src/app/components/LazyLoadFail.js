import React from 'react'
import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';

import '../styles/component-LazyLoadFail.scss';


export class LazyLoadFail extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		message: PropTypes.string
	}

	render() {
		const { title, message } = this.props;

		return (
			<div className='component-LazyLoadFail'>
				<Message negative icon>
					<Icon name='remove circle'/>
					<Message.Content>
						<Message.Header>{title ? title : 'Failed to load'}</Message.Header>
						<p>
							{ message ? message : 'This component could not be loaded. Please check your internet connection.'}
						</p>
					</Message.Content>
				</Message>
		</div>
		);
	}
}
