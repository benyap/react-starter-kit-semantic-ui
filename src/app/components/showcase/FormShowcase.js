import React from 'react'
import { Header, Form, Button, Checkbox, Message } from 'semantic-ui-react'

import '../../styles/component-Showcase.scss';


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export class FormShowcase extends React.Component {
	render() {
		return (
			<div className='component-Showcase component-Showcase--form'>
				<Header as='h2'>
					Form
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/form' target='_blank'>https://react.semantic-ui.com/elements/form</a>
					</Header.Subheader>
				</Header>

				<Form>
					<Form.Field>
						<label>First Name</label>
						<input placeholder='First Name' />
					</Form.Field>
					<Form.Field>
						<label>Last Name</label>
						<input placeholder='Last Name' />
					</Form.Field>
					<Form.Field>
						<Checkbox label='I agree to the Terms and Conditions' />
					</Form.Field>
					<Button type='submit'>Submit</Button>
				</Form>
				<div className='component-Showcase__divider--form'></div>

				<Form success>
					<Form.Input label='Email' placeholder='joe@schmoe.com' />
					<Message
						success
						header='Form Completed'
						content="You're all signed up for the newsletter"
					/>
					<Button>Submit</Button>
				</Form>
				<div className='component-Showcase__divider--form'></div>

				<Form>
					<Form.Group widths='equal'>
						<Form.Input label='First name' placeholder='First name' error />
						<Form.Input label='Last name' placeholder='Last name' />
					</Form.Group>
					<Form.Select options={options} placeholder='Gender' error />
					<Form.Checkbox label='I agree to the Terms and Conditions' error />
				</Form>
				<div className='component-Showcase__divider--form'></div>
				
				<Form loading>
					<Form.Input label='Email' placeholder='joe@schmoe.com' />
					<Button>Submit</Button>
				</Form>
			</div>
		);
	}
}
