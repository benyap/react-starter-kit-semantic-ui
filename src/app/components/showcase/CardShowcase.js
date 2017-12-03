import React from 'react'
import { Header, Card, Button, Icon, Image } from 'semantic-ui-react'

import '../../styles/component-Showcase.scss';
import '../../../assets/person.jpg';


const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
]

export class CardShowcase extends React.Component {
	render() {
		const avatar = <Image wrapped src='/images/person.jpg'/>;

		return (
			<div className='component-Showcase component-Showcase--card'>
				<Header as='h2'>
					Card
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/card' target='_blank'>https://react.semantic-ui.com/elements/card</a>
					</Header.Subheader>
				</Header>

				<Card.Group>
					<Card>
						{avatar}
						<Card.Content>
							<Card.Header>
								Matthew
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Joined in 2015
								</span>
							</Card.Meta>
							<Card.Description>
								Matthew is a musician living in Nashville.
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<a>
								<Icon name='user' />
								22 Friends
							</a>
						</Card.Content>
					</Card>
					<Card
						image={avatar}
						header='Elliot Baker'
						meta='Friend'
						description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
						extra={<a><Icon name='user'/>16 Friends</a>}/>
				</Card.Group>
				<div className='component-Showcase__divider'></div>

				<Card.Group>
					<Card>
						<Card.Content>
							<Image floated='right' size='mini' src='/images/person.jpg' />
							<Card.Header>
								Steve Sanders
							</Card.Header>
							<Card.Meta>
								Friends of Elliot
							</Card.Meta>
							<Card.Description>
								Steve wants to add you to the group <strong>best friends</strong>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className='ui two buttons'>
								<Button basic color='green'>Approve</Button>
								<Button basic color='red'>Decline</Button>
							</div>
						</Card.Content>
					</Card>
					<Card>
						<Card.Content>
							<Image floated='right' size='mini' src='/images/person.jpg' />
							<Card.Header>
								Molly Thomas
							</Card.Header>
							<Card.Meta>
								New User
							</Card.Meta>
							<Card.Description>
								Molly wants to add you to the group <strong>musicians</strong>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className='ui two buttons'>
								<Button basic color='green'>Approve</Button>
								<Button basic color='red'>Decline</Button>
							</div>
						</Card.Content>
					</Card>
				</Card.Group>
				<div className='component-Showcase__divider'></div>

				<Card.Group items={items}/>
			</div>
		);
	}
}
