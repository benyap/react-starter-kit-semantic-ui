import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { TitleWithIcon } from '../components/TitleWithIcon';

import '../styles/view-lazyLoad.scss';


export class LazyLoadView extends React.Component {
	render() {
		return (
			<div className='view-lazyLoad'>
				<TitleWithIcon text='LazyLoad example' icon='download'
					subtext='This page was lazy loaded using a dynamic import'/>
				<Container text>
				</Container>
			</div>
		);
	}
}


// Export default for simpler Lazy Load
export default LazyLoadView;
