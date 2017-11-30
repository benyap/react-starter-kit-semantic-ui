import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

import '../styles/component-lazyComponentLoading.scss';


export class LazyComponentLoading extends React.Component {
	render() {
		return (
			<div className='component-lazyComponentLoading'>
				<Dimmer active inverted>
					<Loader active inverted>Loading</Loader>
				</Dimmer>
			</div>
		);
	}
}
