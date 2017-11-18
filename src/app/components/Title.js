import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/es/autobind';
import { Header, Icon } from 'semantic-ui-react'


@autobind
class Title extends React.Component {
	static propTypes = {
		text: PropTypes.string,
		subtext: PropTypes.any,
		icon: PropTypes.string
	}

	state = {
		width: '0',
		height: '0'
	}
	
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	
	render() {
		let paddingTop, header;

		if (this.props.icon) {
			paddingTop = this.state.width > 480 ? '22vh' : '18vh';
			header = (
				<Header as='h1' icon textAlign='center' style={{paddingTop,margin:'0 3rem',color:'white'}}>
					<Icon name={this.props.icon}/>
					{this.props.text}
					<Header.Subheader style={{color:'lightgray'}}>
						{this.props.subtext}
					</Header.Subheader>
				</Header>
			);
		}
		else {
			paddingTop = this.state.width > 480 ? '30vh' : '20vh';
			header = (
				<Header as='h1' textAlign='center' style={{paddingTop,margin:'0 3rem',color:'white'}}>
					{this.props.text}
					<Header.Subheader style={{color:'lightgray'}}>
						{this.props.subtext}
					</Header.Subheader>
				</Header>
			);
		}

		return (
			<div style={{minHeight:'55vh',background:'#365475'}}>
				{header}
				{this.props.children}
			</div>
		);
	}
}


export default Title;
