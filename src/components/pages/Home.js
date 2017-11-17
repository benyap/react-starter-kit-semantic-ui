import React from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react'


const Home = () => {
	return (
		<div>
			<div style={{height:'50vh',background:'#365475'}}>
				<Header as='h1' textAlign='center' style={{paddingTop:'20%',margin:'0 3rem',color:'white'}}>
					Welcome to the React Semantic UI starter kit
				</Header>
				<div style={{marginTop:'3rem',textAlign:'center'}} >
					<Button as='a' 
						icon='github'
						content='View on GitHub'
						labelPosition='left'
						href='https://github.com/bwyap/react-semantic-ui-starter-kit' 
						target='_blank'/>
				</div>
			</div>
			<Container text>
				
			</Container>
		</div>
	);
}


export default Home;
