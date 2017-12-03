import React from 'react';
import PropTypes from 'prop-types';
import { Message, Icon, Card } from 'semantic-ui-react';


// Renders the list of Star Wars films
export class SWAPIFilmList extends React.Component {
	static propTypes = {
		films: PropTypes.arrayOf(PropTypes.shape({
			header: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			meta: PropTypes.string.isRequired,
			fluid: PropTypes.bool.isRequired,
		})),
	}

	render() {
		const { films } = this.props;

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
					<Card.Group items={films}/>
				</div>
			);
		}
	}
}
