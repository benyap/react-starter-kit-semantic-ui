import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Title } from '../components/Title';

import '../styles/view-lazyLoad.scss';


export class LazyLoadView extends React.Component {
	render() {
		return (
			<div className='view-lazyLoad'>
				<Title text='LazyLoad example' subtext='This page has been lazy loaded using a dynamic import.'/>
				<Container text>
				</Container>
			</div>
		);
	}
}


// Export default for simpler Lazy Load
export default LazyLoadView;
