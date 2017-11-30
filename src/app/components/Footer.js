import React from 'react'

import '../styles/component-footer.scss';


export class Footer extends React.Component {
	render() {
		return (
			<div className='component-footer'>
				<div className='component-footer__text'>
					<span>
						&copy; 2017 // assembled by <a href='https://github.com/bwyap'>bwyap</a>
					</span>
					<span>
						<a href='https://github.com/bwyap/react-starter-kit-semantic-ui/blob/master/LICENSE'>License</a>
					</span>
				</div>
			</div>
		);
	}
}
