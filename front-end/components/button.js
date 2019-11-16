import React from 'react';
import PropTypes from 'prop-types';
import Svg from './svg';
import CircleLoader from './svg/icons/circle-loader';

const RadioButton = ({ color, defaultColor, label, isActive, onClick, extraClasses, value }) => (
	<div className={`flex pointer mr3 items-center ${extraClasses}`} data-value={value} onClick={onClick}>
		<span className={`w1-5 h1-5 pa1 border-box flex items-center br-100 ba b--${isActive ? color : defaultColor} pointer mr3`}>
			{isActive ? <span className={`db w-100 h-100 border-box bg-${color} br-100`} /> : null}
		</span>
		<span className={`${isActive ? color : 'dark-gray'}`}>{label}</span>
	</div>
);

RadioButton.propTypes = {
	color: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	isActive: PropTypes.bool,
	defaultColor: PropTypes.string,
	extraClasses: PropTypes.string,
};

RadioButton.defaultProps = {
	isActive: false,
	defaultColor: 'light-gray',
	extraClasses: '',
};

const CheckBoxButton = ({ color, defaultColor, label, isActive, onClick, extraClasses, value }) => (
	<div className={`flex items-center pointer ${extraClasses}`} data-value={value} onClick={onClick}>
		<div className={`flex items-center justify-center w1 h1 ba pa1 br1 b--${isActive ? color : defaultColor} bg-${isActive ? color : ''}`}>
			<span className={`b--white br bb rotate-45 ${isActive ? '' : 'dn'}`} style={{ width: '6px', height: '10px', borderWidth: '2px', marginBottom: '4px' }} />
		</div>
		<label className="gray mb1 ml3 pointer">
			{label}
		</label>
	</div>
);

CheckBoxButton.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	isActive: PropTypes.bool,
	color: PropTypes.string,
	defaultColor: PropTypes.string,
	extraClasses: PropTypes.string,
};

CheckBoxButton.defaultProps = {
	isActive: false,
	color: 'green',
	defaultColor: 'silver',
	extraClasses: '',
};

export { 
	RadioButton,
	CheckBoxButton,
};

const Button = ({ loading, children, ...rest }) => (
	<span className="relative">
		{
			loading ? (
				<span className="flex justify-center items-center absolute w-100 h-100 bg-black-60 pointer">
					<Svg
						classes="db svg-s-white svg-fn"
						viewBox="0 0 40 40"
						width="20px"
						height="20px"
						spriteIcon={CircleLoader}
						style={{ strokeWidth: '3px' }}
					/>
				</span>
			) : null
		}
		<button {...rest}>
			{children}
		</button>
	</span>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	loading: PropTypes.bool,
};

Button.defaultProps = {
	loading: false,
};

export default Button;