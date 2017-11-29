import React from 'react'
import { Header, Button, Message, Icon } from 'semantic-ui-react'

import '../../styles/component-showcase.scss';


export class MessageShowcase extends React.Component {
	state = { visible: true }
	
	handleDismiss = () => {
		this.setState({ visible: false })

		setTimeout(() => {
			this.setState({ visible: true })
		}, 1000)
	}
	
	render() {
		return (
			<div className='component-showcase component-showcase--message'>
				<Header as='h2'>
					Message
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/message' target='_blank'>https://react.semantic-ui.com/elements/message</a>
					</Header.Subheader>
				</Header>

				<Message>
					<Message.Header>
						Changes in Service
					</Message.Header>
					<p>
						We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
					</p>
				</Message>
				<div className='component-showcase__divider'></div>
				
				{ this.state.visible ? 
					<Message
						onDismiss={this.handleDismiss}
						header='Welcome back!'
						content='This is a special notification which you can dismiss.'
					/>
					:
					<p>
						<br/>
						<i>The message will return in 1s</i>
						<br/>
						<br/>
					</p>
				}
				<div className='component-showcase__divider'></div>

				<Message info icon>
					<Icon name='info circle'/>
					<Message.Content>
						<Message.Header>Was this what you wanted?</Message.Header>
						<p>Did you know it's been a while?</p>
					</Message.Content>
				</Message>
				<Message warning icon>
					<Icon name='warning sign'/>
					<Message.Content>
						<Message.Header>You must register before you can do that!</Message.Header>
						<p>Visit our registration page, then try again.</p>
					</Message.Content>
				</Message>
				<Message positive icon>
					<Icon name='check circle'/>
					<Message.Content>
						<Message.Header>You are eligible for a reward</Message.Header>
						<p>Go to your <b>special offers</b> page to see now.</p>
					</Message.Content>
				</Message>
				<Message negative icon>
					<Icon name='remove circle'/>
					<Message.Content>
						<Message.Header>We're sorry we can't apply that discount</Message.Header>
						<p>That offer has expired</p>
					</Message.Content>
				</Message>
			</div>
		);
	}
}
