import React from 'react'
import { Header, Dropdown, Menu } from 'semantic-ui-react'

import '../../styles/component-showcase.scss';


const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const friendOptions = [
	{ text: 'Jenny Hess', value: 'Jenny Hess' },
	{ text: 'Elliot Fu', value: 'Elliot Fu' },
	{ text: 'Steve Feliciano', value: 'Steve Feliciano' },
	{ text: 'Christian Bale', value: 'Christian Bale' },
	{ text: 'Matt Damon', value: 'Matt Damon' },
]

const countryOptions = [ 
	{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, 
	{ key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' }, 
	{ key: 'au', value: 'au', flag: 'au', text: 'Australia' }, 
	{ key: 'br', value: 'br', flag: 'br', text: 'Brazil' }, 
	{ key: 'td', value: 'td', flag: 'td', text: 'Chad' }, 
	{ key: 'cn', value: 'cn', flag: 'cn', text: 'China' }, 
	{ key: 'fr', value: 'fr', flag: 'fr', text: 'France' }, 
	{ key: 'de', value: 'de', flag: 'de', text: 'Germany' }, 
	{ key: 'in', value: 'in', flag: 'in', text: 'India' }, 
	{ key: 'id', value: 'id', flag: 'id', text: 'Indonesia' }, 
	{ key: 'jp', value: 'jp', flag: 'jp', text: 'Japan' }, 
	{ key: 'mc', value: 'mc', flag: 'mc', text: 'Monaco' }, 
]

const skillOptions = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
]

export class DropdownShowcase extends React.Component {
	render() {
		return (
			<div className='component-showcase component-showcase--dropdown'>
				<Header as='h2'>
					Dropdown
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/dropdown' target='_blank'>https://react.semantic-ui.com/elements/dropdown</a>
					</Header.Subheader>
				</Header>
				
				<Menu>
					<Menu.Item>
						Home
					</Menu.Item>
					<Dropdown text='Messages' pointing='left' className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item>Inbox</Dropdown.Item>
							<Dropdown.Item>Drafts (143)</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>Spam (1009)</Dropdown.Item>
							<Dropdown.Item>Trash</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Menu>
				<div className='component-showcase__divider'></div>

				<Menu compact>
					<Dropdown text='Dropdown' options={options} simple item />
				</Menu>
				<div className='component-showcase__divider'></div>

				<Dropdown placeholder='Select Friend' fluid selection options={friendOptions}/>
				<div className='component-showcase__divider'></div>
				
				<Dropdown placeholder='Select Country' fluid search selection options={countryOptions} />
				<div className='component-showcase__divider'></div>

				<Dropdown placeholder='Skills' fluid multiple search selection options={skillOptions} />
			</div>
		);
	}
}
