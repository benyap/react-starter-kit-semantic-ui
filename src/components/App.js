import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react'


class App extends React.Component {
	render() {
		return (
			<div>
				<Header as='h1'>Hello World!</Header>
				<Button animated>
					<Button.Content visible>Button</Button.Content>
					<Button.Content hidden>
						<Icon name='right arrow' />
					</Button.Content>
				</Button>
			</div>
		);
	}
}


export default App;
