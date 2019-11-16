import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../svg';
import CrossIcon from '../svg/icons/cross-icon';

const ToastItem = ({ content, link, remove }) => (
	<div className="toast ">
		<span className="toast-message">{content}</span>
		{link ? <span className="toast-action ">{link}</span> : null}
		<span className="toast-close" onClick={remove}>
			<Svg
				classes="db svg-s-silver"
				viewBox="0 0 24 24"
				width="20px"
				height="20px"
				spriteIcon={CrossIcon}
				style={{ strokeWidth: '3px' }}
			/>
		</span>
	</div>
);

ToastItem.propTypes = {
	content: PropTypes.node.isRequired,
	link: PropTypes.node,
	remove: PropTypes.func.isRequired,
};

ToastItem.defaultProps = {
	link: null,
};

export default ToastItem;
