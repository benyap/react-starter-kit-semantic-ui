import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Title } from '../components/Title';

import '../styles/view-home.scss';


export class HomeView extends React.Component {
	render() {
		return (
			<div className='view-home'>
				<Title text='React Semantic UI starter kit' subtext='Because boilerplate sucks'>
					<div className='view-home__button-container'>
						<Button as='a' 
							icon='github'
							content='View on GitHub'
							labelPosition='left'
							href='https://github.com/bwyap/react-semantic-ui-starter-kit' 
							target='_blank'/>
					</div>
				</Title>
				<Container text>
				</Container>
			</div>
		);
	}
}
