import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import App, { Container } from 'next/app';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../apollo/with-data';
// import UserContext from '../contexts/user';
// import GET_MY_INFO from '../graph/queries/get-my-info.gql';
import noop from '../helpers/noop';
// import NotLoggedin from '../components/not-loggedin';
// import Nav from '../components/nav';
// import Sidebar from '../components/sidebar';
import ToastProvider from '../components/toast';

import '../css/style.css';
// import 'rodal/lib/rodal.css';

class Ehrus extends App {
	render() {
		const { Component, pageProps } = this.props;

		// if (!user || (user && user.category !== 'ogma-user')) {
		// 	return (
		// 		<div className="flex flex-grow-1 bg-near-white black justify-center pa3">
		// 			Please Log in First
		// 		</div>
		// 	);
		// }

		return (
			<Container>
				<Head>
					<title>Dyslexic-Learn</title>
				</Head>
				<div className="flex flex-column w-100">
					{/* <Nav {...this.props} /> */}
					<div className="flex flex-grow-1">
						{/* <Sidebar/> */}
						<ToastProvider>
							<Component {...this.props}/>
						</ToastProvider>
					</div>
				</div>
			</Container>
		)
	}
}

// const WithUser = props => {
// 	const { data, refetch } = useQuery(GET_MY_INFO);
// 
// 	if (!data || !data.me) {
// 		if (props.originalUrl.indexOf('?rq=') < 0) {
// 			if (process.browser) {
// 				Router.push(`/?rq=${btoa(props.originalUrl)}`);
// 			} else {
// 				if (props.resStatus && props.resRedirect) {
// 					props.resStatus(302);
// 					props.resRedirect(`/?rq=${Buffer.from(props.originalUrl, 'utf-8').toString('base64')}`);
// 				}
// 			}
// 		}
// 
// 		return <NotLoggedin/>;
// 	}
// 
// 	return (
// 		<UserContext.Provider value={data && data.me ? [data.me, refetch] : [null, noop]}>
// 			<Ehrus {...props} user={data && data.me ? data.me : null} />
// 		</UserContext.Provider>
// 	);
// };
// 
// WithUser.propTypes = {
// 	resRedirect: PropTypes.func,
// 	resStatus: PropTypes.func,
// 	originalUrl: PropTypes.string,
// };
// 
// WithUser.defaultProps = {
// 	resRedirect: undefined,
// 	resStatus: undefined,
// 	originalUrl: '',
// };
// 
// WithUser.getInitialProps = async ({ Component, ctx }) => {
// 	let pageProps = {};
// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(ctx);
// 	}
// 
// 	let resRedirect;
// 	let resStatus;
// 	let originalUrl;
// 	let { query = {} } = pageProps;
// 
// 	if (!process.browser) {
// 		const { res, req } = ctx;
// 		if (res && req) {
// 			resRedirect = res.redirect.bind(res);
// 			resStatus = res.status.bind(res);
// 			originalUrl = req.originalUrl;
// 			query = {
// 				...query,
// 				...(req.query || {}),
// 			};
// 		}
// 	}
// 
// 	return { pageProps, resRedirect, resStatus, originalUrl, query };
// };

export default withApollo(Ehrus);