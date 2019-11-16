import React from 'react';
import noop from '../helpers/noop';

const ToastContext = React.createContext({
	toasts: [],
	add: noop,
	remove: noop,
});

export default ToastContext;
