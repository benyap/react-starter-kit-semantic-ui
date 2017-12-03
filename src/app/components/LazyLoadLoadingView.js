import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

import '../styles/component-LazyLoadLoadingView.scss';


export class LazyLoadLoadingView extends React.Component {
	render() {
		return (
			<div className='component-LazyLoadLoadingView'>
				<Dimmer active inverted>
					<Loader active inverted>Loading</Loader>
				</Dimmer>
			</div>
		);
	}
}
