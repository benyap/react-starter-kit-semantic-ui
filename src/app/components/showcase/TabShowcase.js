import React from 'react';
import { Header, Button, Tab, Icon } from 'semantic-ui-react';

import '../../styles/component-Showcase.scss';


const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

export class TabShowcase extends React.Component {
	render() {
		return (
			<div className='component-Showcase component-Showcase--tab'>
				<Header as='h2'>
					Tab
					<Header.Subheader>
						<a href='https://react.semantic-ui.com/elements/tab' target='_blank'>https://react.semantic-ui.com/elements/tab</a>
					</Header.Subheader>
				</Header>

				<Tab panes={panes}/>
				<div className='component-Showcase__divider'></div>

				<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
				<div className='component-Showcase__divider'></div>

				{/* NOTE: the tabular prop throws a 'Failed prop type' error. This is a known issue. */}
				{/* <Tab menu={{ fluid: true, vertical: true, tabular: 'left' }} panes={panes} /> */}
			</div>
		);
	}
}
