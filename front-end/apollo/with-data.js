import React, { useMemo } from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './index';

let apolloClient = null;

function initApolloClient (initialState, context) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return createApolloClient(initialState, context);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = createApolloClient(initialState, context);
	}

	return apolloClient
}

export function withApollo (PageComponent, { ssr = true } = {}) {
	const WithApollo = ({ apolloClient, apolloState,  ...rest }, b) => {
		const client = useMemo(
			() => apolloClient || initApolloClient(apolloState),
			[]
		);

		return (
			<ApolloProvider client={client}>
				<PageComponent {...rest} />
			</ApolloProvider>
		)
	}

	// Set the correct displayName in development
	if (process.env.NODE_ENV !== 'production') {
		const displayName =
			PageComponent.displayName || PageComponent.name || 'Component'

		if (displayName === 'App') {
			console.warn('This withApollo HOC only works with PageComponents.')
		}

		WithApollo.displayName = `withApollo(${displayName})`
	}

	if (ssr || PageComponent.getInitialProps) {
		WithApollo.getInitialProps = async context => {
			const { AppTree } = context;

			// Initialize ApolloClient, add it to the context object so
			// we can use it in `PageComponent.getInitialProp`.
			const apolloClient = (context.apolloClient = initApolloClient(undefined, context.ctx));

			// Run wrapped getInitialProps methods
			let pageProps = {};
			if (PageComponent.getInitialProps) {
				pageProps = await PageComponent.getInitialProps(context);
			}

			// Only on the server:
			if (typeof window === 'undefined') {
				// When redirecting, the response is finished.
				// No point in continuing to render
				if (context.res && context.res.finished) {
					return pageProps;
				}

				// Only if ssr is enabled
				if (ssr) {
					try {
						// Run all GraphQL queries
						const { getDataFromTree } = await import('@apollo/react-ssr');
						await getDataFromTree(
							<AppTree
								pageProps={pageProps}
								apolloClient={apolloClient}
							/>
						);
					} catch (error) {
						// Prevent Apollo Client GraphQL errors from crashing SSR.
						// Handle them in components via the data.error prop:
						// https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
						console.error('Error while running `getDataFromTree`', error);
					}

					// getDataFromTree does not call componentWillUnmount
					// head side effect therefore need to be cleared manually
					Head.rewind();
				}
			}

			// Extract query data from the Apollo store
			const apolloState = apolloClient.cache.extract();

			return {
				...pageProps,
				apolloState
			};
		}
	}

	return WithApollo;
};