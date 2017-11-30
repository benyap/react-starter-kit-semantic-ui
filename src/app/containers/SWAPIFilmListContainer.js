import React from 'react';
import axios from 'axios';
import '../components/SWAPIFilmList';
import { SWAPIFilmList } from '../components/SWAPIFilmList';


// This container is soley responsible for fetching data then passing it to the component for rendering
export class SWAPIFilmListContainer extends React.Component {
	state = {
		films: null,
	}

	// Fetch data as soon as the component is mounted
	async componentDidMount() {
		const URL = 'https://swapi.co/api/films';
		const data = await axios.get(URL);
		this.setState({ films: data.data });
	}
	
	render() {
		const { films } = this.state;
		return <SWAPIFilmList films={films}/>;
	}
}
