/**
 * Returns a promise that can be cancelled.
 * https://github.com/facebook/react/issues/5465#issuecomment-157888325
 * @param {Promise} promise 
 */
export const MakeCancellable = function(promise) {
	let _hasCancelled = false;

	const wrappedPromise = new Promise((resolve, reject) => {
		promise.then(
			val => _hasCancelled ? reject({isCancelled: true}) : resolve(val),
			error => _hasCancelled ? reject({isCancelled: true}) : reject(error)
		);
	});
	
	return {
		promise: wrappedPromise,
		cancel: () => { _hasCancelled = true; },
		isCancelled: () => { return _hasCancelled; },
	};
};
