import React from 'react';
import { Header, Button, Container } from 'semantic-ui-react';
import { TitleWithIcon } from '../components/TitleWithIcon';
import { SWAPIFilmListContainer } from '../containers/SWAPIFilmListContainer';

import '../styles/view.scss';


export class DataFetchView extends React.Component {
	render() {
		return (
			<div className='view view-dataFetch'>
				<TitleWithIcon icon='database' text='Data Fetching' subtext='SWAPI - The Star Wars API'/>
				<Container text>
					<p>
						This page demonstrates the concept of a <b>container</b> and the ability for <b>data fetching</b> from a backend.
						A container is a type of component that handles state and data fetching.
						A container does not care about the presentational side of things - 
						instead, it passes its data to a component to render its data.
					</p>
					<p>
						The following container below fetches data from the <a href='https://swapi.co/'>Star Wars API</a> to retrieve a list of all Star Wards films,
						and renders the data using a component.
					</p>
					<SWAPIFilmListContainer/>
				</Container>
			</div>
		);
	}
}
