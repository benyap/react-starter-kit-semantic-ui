import React from 'react';
import { LazyComponentLoading } from './LazyComponentLoading';


export default function asyncComponent(getComponent, loadingComponent = LazyComponentLoading) {
	class AsyncComponent extends React.Component {
		static Component = null;

		state = { 
			Component: AsyncComponent.Component 
		}

		componentWillMount() {
			if (!this.state.Component) {
				getComponent().then(Component => {
					AsyncComponent.Component = Component;
					this.setState({ Component });
				});
			}
		}

		render() {
			const { Component } = this.state;
			if (Component) {
				return <Component {...this.props}/>
			}
			return <LazyComponentLoading/>;
		}
	}

	return AsyncComponent;
};
