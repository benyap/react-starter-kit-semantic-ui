import React from 'react';
import { Header, Button, Container } from 'semantic-ui-react';
import { Title } from '../components/Title';

import '../styles/view.scss';


export class HomeView extends React.Component {
	render() {
		return (
			<div className='view view-Home'>
				<Title text='React starter kit with Semantic UI' subtext='Because boilerplate sucks'>
					<div className='component-Title__button-container'>
						<Button as='a' 
							icon='github'
							content='Get from GitHub'
							labelPosition='left'
							href='https://github.com/bwyap/react-starter-kit-semantic-ui'
							target='_blank'/>
					</div>
				</Title>
				<Container text>
					<p>
						This repository contains boilerplate code to help kickstart a frontend project with <a href='http://reactjs.org'>React</a>, 
						using the <a href='http://react.semantic-ui.com'>React Semantic UI</a> integration. 
						The aim of this project is for developers to be able to clone this repository and make a start on development 
						without having to set up all the boilerplate code that is the same every time. 
						Clone the repository, run the build script and you're ready to create a beautiful React application! 
						Also comes pre-installed with <a href='https://reacttraining.com/react-router/'>React Router</a> for all your Single Page Application routing needs.
					</p>

					<Header as='h2'>
						How do I get started?
					</Header>
					<p>
						Go to the <a href='https://github.com/bwyap/react-starter-kit-semantic-ui'>GitHub repository</a> to download the project 
						or run this command on your command line to clone the repository: 
					</p>
					<div className='base__code-snippet--center'>
						git clone https://github.com/bwyap/react-starter-kit-semantic-ui.git
					</div>
					<p>
						Then follow <a href='https://github.com/bwyap/react-starter-kit-semantic-ui#how-to-use-this-project'>the instructions</a> in the README.md file in the "How to use this project" section. 
					</p>

					<Header as='h2'>
						Technologies
					</Header>

					<Header as='h3'>
						React
					</Header>
					<p>
						<a href='http://reactjs.org'>React</a> is a JavaScript Frontend framework developed by <a href='https://code.facebook.com/projects/'>Facebook Open Source</a>.
						It allows developers to use a component-based system to build a modular, reusable user interfaces. 
					</p>

					<Header as='h3'>
						React Semantic UI
					</Header>
					<p>
					<a href='http://react.semantic-ui.com'>React Semantic UI</a> is a port of the <a href='http://semantic-ui.com'>Semantic UI</a> library for React. 
						It provides a wide variety of beautifully designed UI components ready to use, 
						with extremely customisable options for theming. 
					</p>

					<Header as='h3'>
						React Router
					</Header>
					<p>
						<a href='https://reacttraining.com/react-router'>React Router</a> is a vital part of the React ecosystem that provides 
						client-side routing for Singe Page Applications. 
						It enables you to build a full blown application with static and dynamic routes right within React, 
						which allows the whole site to be served as a static HTML file, purely managed by JavaScript. 
					</p>

					<Header as='h3'>
						Sass (with breakpoints!)
					</Header>
					<p>
						<a href='http://sass-lang.com'>Sass</a> is an extension to CSS which allows you to use nesting, variables, mixins and more,
						allowing you to better organise and write more powerful CSS with little effort. 
						Additionally, some useful breakpoint mixins are provided in the <code>src/app/styles/_bp.scss</code> file. 
						View the <a href='https://github.com/bwyap/react-starter-kit-semantic-ui/tree/master/src/app/styles'>README.md</a> file in the <code>src/app/styles</code> folder in the project source for more details on how to use the mixins.
					</p>

					<Header as='h3'>
						Webpack 3
					</Header>
					<p>
						<a href='https://webpack.js.org/'>Webpack</a> is a code bundler that allows you to transpile, transform and bundle your code for deployment. 
						This project comes with two pre-configured Webpack build processes -
						one optimised for development, and one optimised for production. 
						The configurations support SCSS transpilation, code splitting and dynamic imports, ES6 syntax, as well as async-await and decorators. 
					</p>
				</Container>
			</div>
		);
	}
}
