import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import TitleWithIcon from '../components/TitleWithIcon';

import '../styles/view-notFound.scss';


class NotFoundView extends React.Component {
	render() {
		const { location, history } = this.props;
		
		return (
			<div className='view-notFound'>
				<TitleWithIcon text='Page not found.' icon='warning circle'
					subtext={<span>The route at <code>{location.pathname}</code> doesn't contain anything.</span>}>
					<div className='view-notFound__button-container'>
						<Button animated onClick={history.goBack}>
							<Button.Content visible>Go back</Button.Content>
							<Button.Content hidden>
								<Icon name='left arrow'/>
							</Button.Content>
						</Button>
					</div>
				</TitleWithIcon>
			</div>
		);
	}
}


export default NotFoundView;
