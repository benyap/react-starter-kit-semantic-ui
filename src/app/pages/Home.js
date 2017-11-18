import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import Title from '../components/Title';


class Home extends React.Component {
	render() {
		return (
			<div>
				<Title text='Welcome to the React Semantic UI starter kit'>
					<div style={{padding:'3rem 0 3rem 0',textAlign:'center'}} >
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


export default Home;
