import React from 'react';
import { Button, Icon, Container } from 'semantic-ui-react';
import { ScrollToTop } from '../components/ScrollToTop';
import { TitleWithIcon } from '../components/TitleWithIcon';

import '../styles/view.scss';


export class NotFoundView extends React.Component {
	render() {
		const { location, history } = this.props;
		
		return (
			<div className='view view-NotFound'>
				<ScrollToTop/>
				<TitleWithIcon text='Page not found.' icon='warning circle'
					subtext={<span>The route at <code>{location.pathname}</code> doesn't contain anything.</span>}>
					<div className='component-Title__button-container'>
						<Button animated onClick={history.goBack}>
							<Button.Content visible>Go back</Button.Content>
							<Button.Content hidden>
								<Icon name='left arrow'/>
							</Button.Content>
						</Button>
					</div>
				</TitleWithIcon>
				<Container text>
					<p>
						This is a fallback route that was picked up by React Router.
						Any route that doesn't match one of your predefined routes,
						or a static asset, will bring you here. 
						Neat little trick, huh?
					</p>
					<p>
						Have a look at <a href='https://github.com/bwyap/react-starter-kit-semantic-ui/blob/master/src/app/App.js'><code>App.js</code></a> to see how the routes were configured. 
						Alternatively, head to the <a href='https://reacttraining.com/react-router/web'>React Router</a> documentation to learn more about how to manage your Single Page Application's routing needs.
					</p>
				</Container>
			</div>
		);
	}
}
