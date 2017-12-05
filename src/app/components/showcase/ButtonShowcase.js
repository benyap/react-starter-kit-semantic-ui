import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

import '../../styles/component-Showcase.scss';
import '../../styles/component-Showcase--button.scss';


export class ButtonShowcase extends React.Component {
	render() {
		return (
			<div className='component-Showcase component-Showcase--button'>
				<Header as='h2'>
					Button
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/button' target='_blank'>https://react.semantic-ui.com/elements/button</a>
					</Header.Subheader>
				</Header>

				<Button>Click Here</Button>
				<Button basic>Click Here</Button>
				<Button loading primary>Loading</Button>
				<Button loading secondary>Loading</Button>
				<div className='component-Showcase__divider'></div>

				<Button icon='world'/>
				<Button content='Pause' icon='pause' labelPosition='left' />
				<Button
					content='Like'
					icon='heart'
					label={{ as: 'a', basic: true, content: '2,048' }}
					labelPosition='right'/>
				<div className='component-Showcase__divider'></div>

				<Button animated>
					<Button.Content visible>Next</Button.Content>
					<Button.Content hidden>
						<Icon name='right arrow' />
					</Button.Content>
				</Button>
				<Button animated='vertical'>
					<Button.Content hidden>Shop</Button.Content>
					<Button.Content visible>
						<Icon name='shop' />
					</Button.Content>
				</Button>
				<Button animated='fade'>
					<Button.Content visible>
						Sign-up for a Pro account
					</Button.Content>
					<Button.Content hidden>
						$12.99 a month
					</Button.Content>
				</Button>
				<div className='component-Showcase__divider'></div>

				<Button.Group>
					<Button icon='bold' />
					<Button icon='underline' />
					<Button icon='text width' />
				</Button.Group>
				<Button.Group>
				<Button>Cancel</Button>
					<Button.Or />
					<Button positive>Save</Button>
				</Button.Group>
				<div className='component-Showcase__divider'></div>
				
				<Button color='facebook'>
					<Icon name='facebook' /> Facebook
				</Button>
				<Button color='youtube'>
					<Icon name='youtube' /> YouTube
				</Button>
				<Button circular color='linkedin' icon='linkedin' />
				<Button circular color='twitter' icon='twitter' />
				<Button circular color='google plus' icon='google plus' />
			</div>
		);
	}
}
