import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';
import asyncComponent from '../components/AsyncComponent';
import { ScrollToTop } from '../components/ScrollToTop';
import { TitleWithIcon } from '../components/TitleWithIcon';
import { LazyLoadFail } from '../components/LazyLoadFail';

import '../styles/view.scss';


// ========================================
//  Dynamically import showcase components
// ========================================

const ButtonShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "ButtonShowcase" */'../components/showcase/ButtonShowcase')
		.then(module => module.ButtonShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load ButtonShowcase component.'/>)
});

const InputShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "InputShowcase" */'../components/showcase/InputShowcase')
		.then(module => module.InputShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load InputShowcase component.'/>)
});

const MessageShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "MessageShowcase" */'../components/showcase/MessageShowcase')
		.then(module => module.MessageShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load MessageShowcase component.'/>)
});
	
const FormShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "FormShowcase" */'../components/showcase/FormShowcase')
		.then(module => module.FormShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load FormShowcase component.'/>)
});

const TabShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "TabShowcase" */'../components/showcase/TabShowcase')
		.then(module => module.TabShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load TabShowcase component.'/>)
});

const DropdownShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "DropdownShowcase" */'../components/showcase/DropdownShowcase')
		.then(module => module.DropdownShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load DropdownShowcase component.'/>)
});

const ModalShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "ModalShowcase" */'../components/showcase/ModalShowcase')
		.then(module => module.ModalShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load ModalShowcase component.'/>)
});

const CardShowcase = asyncComponent(async () => {
	return import(/* webpackChunkName: "CardShowcase" */'../components/showcase/CardShowcase')
		.then(module => module.CardShowcase)
		.catch(() => () => <LazyLoadFail message='Failed to load CardShowcase component.'/>)
});


export class ShowcaseView extends React.Component {
	render() {
		return (
			<div className='view view-Showcase'>
				<ScrollToTop/>
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
