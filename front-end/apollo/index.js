import { omit } from 'ramda';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
import fetch from 'isomorphic-unfetch';
import config from '../config';

const cache = (initialState = {}) => new InMemoryCache().restore(initialState);

const requestLink = new ApolloLink((operation, forward) =>
	new Observable(observer => {
		let handle;
		Promise.resolve(operation)
			.then(() => {
				handle = forward(operation).subscribe({
					next: observer.next.bind(observer),
					error: observer.error.bind(observer),
					complete: observer.complete.bind(observer),
				});
			})
			.catch(observer.error.bind(observer));

		return () => {
			if (handle) handle.unsubscribe();
		};
	})
);

module.exports = (initialState, { req: { headers = {} } = {} } = {}) => {
	headers.devicetype = 'ogma';

	let omittedHeaders = omit([
		'cf-ray',
		'cf-connecting-ip',
		'upgrade-insecure-requests',
		'accept',
		'host',
	])(headers);

	if (config.graph.authorizationHeader) {
		omittedHeaders = {
			...omittedHeaders,
			authorization: config.graph.authorizationHeader,
		};
	}
	
	return new ApolloClient({
		ssrMode: true,
		link: ApolloLink.from([
			onError(({ graphQLErrors, networkError }) => {
				if (graphQLErrors)
					graphQLErrors.forEach(({ message, locations, path }) =>
						console.log(
							`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
						),
					);

				if (networkError) console.log(`[Network error]: ${networkError}`);
			}),
			requestLink,
			new HttpLink({
				uri: config.graph.url,
				credentials: 'include',
				headers: omittedHeaders,
				fetch,
			})
		]),
		cache: cache(initialState)
	});
};