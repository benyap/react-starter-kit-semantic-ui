import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Title from '../components/Title';


class NotFound extends React.Component {
	render() {
		return (
			<div>
				<Title text='Page not found.' icon='warning circle'
					subtext={<span>The route at <code>{this.props.location.pathname}</code> doesn't contain anything.</span>}>
					<div style={{padding:'3rem 0 3rem 0',textAlign:'center'}} >
						<Button animated onClick={this.props.history.goBack}>
							<Button.Content visible>Go back</Button.Content>
							<Button.Content hidden>
								<Icon name='left arrow'/>
							</Button.Content>
						</Button>
					</div>
				</Title>
			</div>
		);
	}
}


export default NotFound;
