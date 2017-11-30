import React from 'react';
import PropTypes from 'prop-types';
import { Message, Icon, Card } from 'semantic-ui-react';


// Renders the list of Star Wars films
export class SWAPIFilmList extends React.Component {
	static propTypes = {
		films: PropTypes.shape({
			count: PropTypes.number.isRequired,
			results: PropTypes.arrayOf(PropTypes.shape({
				title: PropTypes.string.isRequired,
				episode_id: PropTypes.number.isRequired,
				director: PropTypes.string.isRequired,
				producer: PropTypes.string.isRequired,
				release_date: PropTypes.string.isRequired,
			})),
		}),
	}

	state = {
		filmList: null
	}

	// Process props when they are received
	componentWillReceiveProps(nextProps) {
		if (nextProps.films && nextProps.films.results) {
			const filmList = [];
			nextProps.films.results
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
				});
			});
			this.setState({ filmList });
		}
	}

	render() {
		const { films } = this.props;
		const { filmList } = this.state;

		if (!films) {
			return (
				<Message icon>
					<Icon name='circle notched' loading/>
					<Message.Content>
						<Message.Header>Just one second</Message.Header>
						Aligning the tractor beam...
					</Message.Content>
				</Message>
			);
		}
		else {
			return (
				<div className='component-SWAPIFilmList'>
					<Card.Group items={filmList}/>
				</div>
			);
		}
	}
}
