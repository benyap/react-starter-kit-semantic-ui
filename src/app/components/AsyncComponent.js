import React from 'react';
import { LazyComponentLoading } from './LazyComponentLoading';


/**
 * This function asynchronously retrieves a component and returns a wrapper component that can render the imported component.
 * A loading component is rendered while the component is being imported. 
 * This behaviour can be overridden by passing in a second argument in the function.
 * @param {*} getComponent A function that returns a promise using a dynamic import
 * @param {*} loadingComponent The component to override the default loading component that gets rendered
 */
export default function asyncComponent(getComponent, loadingComponent = <LazyComponentLoading/>) {
	class AsyncComponent extends React.Component {
		static Component = null;

		state = { 
			Component: AsyncComponent.Component 
		}

		componentWillMount() {
			if (!this.state.Component) {
				// Execute function to load component
				getComponent().then(Component => {
					AsyncComponent.Component = Component;
					this.setState({ Component });
				});
			}
		}

		render() {
			const { Component } = this.state;
			if (Component) {
				// Render component if it has been loaded
				return <Component {...this.props}/>
			}
			// Otherwise, return the loader
			return loadingComponent;
		}
	}

	return AsyncComponent;
};
