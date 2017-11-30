import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';
import { TitleWithIcon } from '../components/TitleWithIcon';
import { ButtonShowcase } from '../components/showcase/ButtonShowcase';
import { InputShowcase } from '../components/showcase/InputShowcase';
import { MessageShowcase } from '../components/showcase/MessageShowcase';
import { FormShowcase } from '../components/showcase/FormShowcase';
import { TabShowcase } from '../components/showcase/TabShowcase';
import { DropdownShowcase } from '../components/showcase/DropdownShowcase';
import { ModalShowcase } from '../components/showcase/ModalShowcase';
import { CardShowcase } from '../components/showcase/CardShowcase';

import '../styles/view-showcase.scss';


export class ShowcaseView extends React.Component {
	render() {
		return (
			<div className='view-showcase'>
				<TitleWithIcon text='Component showcase' icon='block layout'
					subtext='Some of the best from Semantic UI'/>

				<Container text>
					<Message info icon>
						<Icon name='idea'/>
						<Message.Content>
							<Message.Header>
								But wait, there's more!
							</Message.Header>
							<p>
								This is a small subset of what Semantic UI offers, 
								handpicked to showcase some of the most commonly used UI elements.
								Check out the <a href='https://react.semantic-ui.com' target='_blank'>official website</a> for the full list of components!
							</p>
						</Message.Content>
					</Message>
					<ButtonShowcase/>
					<InputShowcase/>
					<MessageShowcase/>
					<FormShowcase/>
					<TabShowcase/>
					<DropdownShowcase/>
					<ModalShowcase/>
					<CardShowcase/>
				</Container>
			</div>
		);
	}
}
