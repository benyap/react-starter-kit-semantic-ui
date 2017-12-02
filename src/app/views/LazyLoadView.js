import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { TitleWithIcon } from '../components/TitleWithIcon';

import '../styles/view.scss';


export class LazyLoadView extends React.Component {
	render() {
		return (
			<div className='view view-LazyLoad'>
				<TitleWithIcon text='LazyLoad example' icon='download'
					subtext='Only download what you need'/>
				<Container text>
					<Header as='h2'>
						What does this mean?
					</Header>
					<p>
						This page was lazy loaded using a dynamic import, 
						which means you only downloaded the JavaScript for this page when you accessed it. 
						Single Page Applications have a tendency to deliver a massive, single chunk of JavaScript containing EVERY single part of the site,
						when the user might not even go to any other part of the site besides the home page. 
						Reduce download traffic and increase load time by using dynamic imports in the right places.
					</p>

					<Header as='h2'>
						Sounds like black magic.
					</Header>
					<p>
						You can see this in action if you open up devtools in your browser. 
						Clear your cache, and navigate to the home page. 
						You should see that a bunch of files are downloaded, 
						some of which should be CSS and JavaScript files. 
					</p>
					<p>
						Then, navigate to this page. BOOM. 
						You will see another JavaScript file download, called <code>LazyLoadView.[hash].min.js</code>.
						That file contained all the JavaScript needed to render this page. 
					</p>

					<Header as='h2'>
						How do I do this?
					</Header>
					<p>
						Luckily for you, the Webpack configuration has been set up for you to do this easily.
						Use the <code>asyncComponent</code> function provided to wrap the component you want to lazy load,
						then use a dynamic import to import the component. 
						See <a href='https://github.com/bwyap/react-starter-kit-semantic-ui/blob/master/src/app/App.jsx'><code>App.jsx</code></a> for an example of how this is done. 
					</p>
					<p>
						The <code>asyncComponent</code> function returns a full height loading component while it is loading,
						simluated by a <code>setTimeout</code> function. 
						You might want to customise this behaviour - 
						pass in a custom component to render, or pass in null, 
						as the second argument to override the default laoding component.
						Be sure to check out the source code to understand how it works.
					</p>

					<Header as='h2'>
						Fail-safe
					</Header>
					<p>
						In the event that your user gets disconnected from the internet and is unable to retrieve a lazy loaded component,
						it is good practice to include a fail-safe. 
						You can see this in action if you navigate to the home page, clear your cache, stop the local development server, then try to load this page.
						You should see a user friendly error screen. 
						Once you start the local development server again, the component should load once you navigate away from the page then back again. 
					</p>
				</Container>
			</div>
		);
	}
}


// Export default for simpler Lazy Load
export default LazyLoadView;
