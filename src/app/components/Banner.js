import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import '../styles/component-Banner.scss';


export class Banner extends React.Component {
	static propTypes = {
		icon: PropTypes.string,
		text: PropTypes.string,
		backgroundColor: PropTypes.string,
		color: PropTypes.string,
		minHeight: PropTypes.string,
	}

	static defaultProps = {
		text: 'IMPORTANT: This is a banner. Add some custom text.',
		minHeight: '1rem',
		backgroundColor: '#cdfeff',
		color: '#000',
	}

	render() {
		const { icon, backgroundColor, color, minHeight, text } = this.props;
		
		return (
			<div className='component-Banner' style={{backgroundColor, color, minHeight }}>
				<p>
					{ icon ? <Icon name={icon}/> : null }
					{text}
				</p>
			</div>
		);
	}
}
