import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { TitleWithIcon } from '../components/TitleWithIcon';

import '../styles/view-lazyLoad.scss';


export class LazyLoadView extends React.Component {
	render() {
		return (
			<div className='view-lazyLoad'>
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
						Use the <code>asyncComponent</code> function provided to wrap the component you want to lazy load.
						See <a href='https://github.com/bwyap/react-starter-kit-semantic-ui/blob/master/src/app/App.js'><code>App.js</code></a> for an example of how this is done. 
					</p>
				</Container>
			</div>
		);
	}
}


// Export default for simpler Lazy Load
export default LazyLoadView;
