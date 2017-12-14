import React from 'react';


export class ScrollToTop extends React.Component {
	componentDidMount(prevProps) {
		window.scrollTo(0, 0);
	}

	render() {
		return null;
	}
}
