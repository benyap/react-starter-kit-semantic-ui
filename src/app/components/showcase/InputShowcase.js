import React from 'react'
import { Header, Icon, Input, Dropdown } from 'semantic-ui-react'

import '../../styles/component-Showcase.scss';
import '../../styles/component-Showcase--input.scss';


const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

export class InputShowcase extends React.Component {
	render() {
		return (
			<div className='component-Showcase component-Showcase--input'>
				<Header as='h2'>
					Input
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/input' target='_blank'>https://react.semantic-ui.com/elements/input</a>
					</Header.Subheader>
				</Header>

				<Input placeholder='Search...'/>
				<Input error placeholder='Search...'/>
				<div className='component-Showcase__divider'></div>

				<Input loading icon='user' placeholder='Search...'/>
				<Input icon='search' placeholder='Search...' />
				<div className='component-Showcase__divider'></div>

				<Input iconPosition='left' placeholder='Email'>
					<Icon name='at' />
					<input />
				</Input>
				<Input
					label={{ basic: true, content: 'kg' }}
					labelPosition='right'
					placeholder='Enter weight...'/>
				<div className='component-Showcase__divider'></div>

				<Input label='http://' placeholder='mysite.com' />
				<Input
					label={<Dropdown defaultValue='.com' options={options} />}
					labelPosition='right'
					placeholder='Find domain'/>
			</div>
		);
	}
}
