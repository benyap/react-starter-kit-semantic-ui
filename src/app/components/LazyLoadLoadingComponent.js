import React from 'react'
import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';

import '../styles/component-LazyLoadLoadingComponent.scss';


export class LazyLoadLoadingComponent extends React.Component {
	static propTypes = {
		message: PropTypes.string
	}

	render() {
		const { message } = this.props;

		return (
			<div className='component-LazyLoadLoadingComponent'>
				<Message>
					<Message.Content>
						<p>
							{ message ? message : 'Loading...'}
						</p>
					</Message.Content>
				</Message>
		</div>
		);
	}
}
