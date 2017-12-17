import React from 'react';
import { Header, Button, Image, Modal, Icon } from 'semantic-ui-react';

import '../../styles/component-Showcase.scss';
import '../../styles/component-Showcase--modal.scss';
import '../../../assets/images/person.jpg';


export class ModalShowcase extends React.Component {
	state = { open: false }
	
	show = size => () => this.setState({ size, open: true })
	close = () => this.setState({ open: false })
	
	render() {
		const { open, size } = this.state
		
		return (
			<div className='component-Showcase component-Showcase--modal'>
				<Header as='h2'>
					Modal
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/modal' target='_blank'>https://react.semantic-ui.com/elements/modal</a>
					</Header.Subheader>
				</Header>

				<div className='component-Showcase--modal__buttonGroup'>
					<Modal trigger={<Button>Show Modal</Button>}>
						<Modal.Header>Select a Photo</Modal.Header>
						<Modal.Content image>
							<Image wrapped width={200} src='/images/person.jpg' />
							<Modal.Description>
								<Header>Default Profile Image</Header>
								<p>We've found the following gravatar image associated with your e-mail address.</p>
								<p>Is it okay to use this photo?</p>
							</Modal.Description>
						</Modal.Content>
					</Modal>

					<Modal trigger={<Button>Show Basic Modal</Button>} basic size='small'>
						<Header icon='archive' content='Archive Old Messages' />
						<Modal.Content>
							<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
						</Modal.Content>
						<Modal.Actions>
							<Button basic color='red' inverted>
								<Icon name='remove' /> No
							</Button>
							<Button color='green' inverted>
								<Icon name='checkmark' /> Yes
							</Button>
						</Modal.Actions>
					</Modal>
				</div>
				<div className='component-Showcase__divider'></div>

				<div className='component-Showcase--modal__buttonGroup'>
					<Button onClick={this.show('mini')}>Mini</Button>
					<Button onClick={this.show('tiny')}>Tiny</Button>
					<Button onClick={this.show('small')}>Small</Button>
					<Button onClick={this.show('large')}>Large</Button>
					<Button onClick={this.show('fullscreen')}>Fullscreen</Button>

					<Modal size={size} open={open} onClose={this.close}>
						<Modal.Header>
							Delete Your Account
						</Modal.Header>
						<Modal.Content>
							<p>Are you sure you want to delete your account?</p>
						</Modal.Content>
						<Modal.Actions>
							<Button negative content='No'/>
							<Button positive icon='checkmark' labelPosition='right' content='Yes' />
						</Modal.Actions>
					</Modal>
				</div>
			</div>
		);
	}
}
