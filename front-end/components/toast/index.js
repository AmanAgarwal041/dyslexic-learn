import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ToastContext from '../../contexts/toast';
import { generateUID } from '../../helpers/util';
import ToastItem from './toast-item';

/* eslint-disable import/no-unassigned-import */
import '../../css/toast.css';
/* eslint-enable import/no-unassigned-import */

class ToastProvider extends React.Component {
	state = {
		toasts: [],
	};

	static propTypes = {
		children: PropTypes.node.isRequired,
		timeout: PropTypes.number,
	};

	static defaultProps = {
		timeout: 3000,
	};

	add = ({ content, link }) => {
		if (!content) {
			return;
		}

		const id = generateUID();

		return this.setState(
			prev => {
				const toast = prev.toasts.slice(0);
				return { ...prev, toasts: [...toast, { content, link, id }] };
			},
			() => setTimeout(() => this.remove({ id }), this.props.timeout),
		);
	};

	remove = ({ id }) => {
		const toasts = this.state.toasts.filter(i => i.id !== id).slice(0);
		this.setState(prev => ({ ...prev, toasts: [...toasts] }));
	};

	eventAddToast = ev => this.add(ev.detail);

	componentDidMount() {
		global.document.addEventListener('dispatch-toast', this.eventAddToast);
	}

	componentWillUnmount() {
		global.document.removeEventListener('dispatch-toast', this.eventAddToast);
	}

	render() {
		const { toasts } = this.state;
		const { add, remove } = this;
		/* eslint-disable no-undef */

		return (
			<ToastContext.Provider value={{ add, remove }}>
				{process.browser
					? createPortal(
							<>
								{toasts.map(({ id, ...rest }) => (
									<ToastItem key={id} {...rest} id={id} remove={() => remove({ id })} />
								))}
							</>,
							document.querySelector('#toast-container'),
					  )
					: null}
				{this.props.children}
			</ToastContext.Provider>
		);
		/* eslint-enable no-undef */
	}
}

export default ToastProvider;
