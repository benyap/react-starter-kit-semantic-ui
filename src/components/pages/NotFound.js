import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/es/autobind';
import { Header, Button, Icon } from 'semantic-ui-react'


@autobind
class NotFound extends React.Component {
	render() {
		return (
			<div>
				<div style={{height:'70vh',background:'#365475',textAlign:'center'}}>
					<Header as='h1' icon textAlign='center' style={{paddingTop:'20%',margin:'0 3rem',color:'white'}}>
						<Icon name='warning circle'/>
						Page not found.
						<Header.Subheader style={{color:'lightgray'}}>
							The route at <code>{this.props.location.pathname}</code> doesn't contain anything.
						</Header.Subheader>
					</Header>
					<Button animated style={{marginTop:'2rem'}} onClick={this.props.history.goBack}>
						<Button.Content visible>Go back</Button.Content>
						<Button.Content hidden>
							<Icon name='left arrow'/>
						</Button.Content>
					</Button>
				</div>
			</div>
		);
	}
}


export default NotFound;
