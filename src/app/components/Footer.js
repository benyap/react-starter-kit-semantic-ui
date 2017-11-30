import React from 'react'

import '../styles/component-footer.scss';


export class Footer extends React.Component {
	render() {
		return (
			<div className='component-footer'>
				<div className='component-footer__text'>
					<span>
						&copy; 2017 // assembled by bwyap // <a href='https://github.com/bwyap'>GitHub</a>
					</span>
				</div>
			</div>
		);
	}
}
