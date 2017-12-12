import React from 'react';
import { Button, Icon, Container } from 'semantic-ui-react';
import { TitleWithIcon } from '../components/TitleWithIcon';

import '../styles/view.scss';


export class LazyLoadFailView extends React.Component {
	render() {
		const { location, history } = this.props;
		
		return (
			<div className='view view-LazyLoadFail'>
				<TitleWithIcon text='Failed to load' icon='warning circle'
					subtext={<span>Could not load <code>{location.pathname}</code> from server.</span>}>
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
						You will see this page as a fallback if a lazy loaded component fails to load. 
						This is a good safety to include in your application so that your users will see a graceful error instead of a blank screen if your component fails to load.
					</p> 
					<p>
						This mechanism can be easily achieved by adding a catch block to your dynamic import 
						that returns a statically imported fail-safe component if it fails to retrieve the lazy loaded component. 
						See <a href='https://github.com/bwyap/react-starter-kit-semantic-ui/blob/master/src/app/App.js'><code>App.js</code></a> for an example of how this is done. 
					</p>
				</Container>
			</div>
		);
	}
}
