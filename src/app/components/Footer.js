import React from 'react'

import '../styles/component-Footer.scss';


export class Footer extends React.Component {
	render() {
		return (
			<div className='component-Footer'>
				<div className='component-Footer__text'>
					<span>
						&copy; 2017 // assembled by bwyap // <a href='https://github.com/bwyap'>GitHub</a>
					</span>
				</div>
			</div>
		);
	}
}
