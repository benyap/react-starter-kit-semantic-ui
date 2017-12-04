import React from 'react';
import axios from 'axios';
import '../components/SWAPIFilmList';
import { SWAPIFilmList } from '../components/SWAPIFilmList';
import { MakeCancellable } from '../helpers/MakeCancellable';


// This container is soley responsible for fetching data then passing it to the component for rendering
export class SWAPIFilmListContainer extends React.Component {
	state = {
		filmList: null,
	}

	// Fetch data as soon as the component is mounted
	async componentDidMount() {
		const URL = 'https://swapi.co/api/films';

		// Wrap the promise to make it cancellable if the component unmounts
		this.getData = MakeCancellable(axios.get(URL));
		
		try {
			const response = await this.getData.promise;
			if (response.data) {
				const filmList = [];
				
				console.log(response);

				response.data.results
				// Sort the results
				.sort((a, b) => {
					if (a.episode_id > b.episode_id) return 1;
					else if (a.episode_id < b.episode_id) return -1;
					return 0;
				})
				// Map items in results to Semantic UI's Card API
				.forEach((film) => {
					filmList.push({
						header: film.title,
						description: `Directed by ${film.director}. Released on ${film.release_date}.`,
						meta: `Episode ${film.episode_id}`,
						fluid: true,
						onClick: () => {
							console.log(`You clicked on ${film.title}!`)
						}
					});
				});
	
				this.setState({ filmList });
			}
		}
		catch (err) {
			if (!this.getData.isCancelled()) {
				console.warn(err.toString());
			}
		}
	}

	componentWillUnmount() {
		if (this.getData) {
			// Cancel data retrieval
			this.getData.cancel();
		}
	}
	
	render() {
		const { filmList } = this.state;
		return <SWAPIFilmList films={filmList}/>;
	}
}
