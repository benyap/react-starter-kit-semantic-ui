import React from 'react'
import DateFormat from 'dateformat';

import '../styles/component-Footer.scss';


export class Footer extends React.Component {
	render() {
		return (
			<div className='component-Footer'>
				<div className='component-Footer__text'>
					<span>
						&copy; 2017 // assembled by <a href='https://github.com/bwyap'>bwyap</a> // <a href='https://github.com/bwyap/react-starter-kit-semantic-ui/blob/master/LICENSE'>license</a>
					</span>
					<span>
						Built on {DateFormat(process.env.BUILD_DATE, 'd mmm yyyy @ HH:MM')}
					</span>
				</div>
			</div>
		);
	}
}
