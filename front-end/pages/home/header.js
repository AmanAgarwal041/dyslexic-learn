import React from 'react';
import PropTypes from 'prop-types';
import CanvasDraw from "react-canvas-draw";

const Header = props => {
	const {letterType,setLetterType}=props;
	const handleAlphabets=()=>{
setLetterType(1);
	}
	const handleDigits=()=>{
setLetterType(2);
	}
	return(
		<div className="flex  mv3 justify-between f4">
			<div className="">Logo</div>	
			<div className=" flex br-pill ba b--prpl ">
				<span className={`br--right3 pv2 ph4 pointer fw6  ${props.type==='learn'?'bg-prpl white':'prpl'} `} data-type="learn" onClick={props.handleType}>Learn</span>
				<span className={`br--left3 pv2 ph4 pointer fw6 ${props.type==='test'?'bg-prpl white':'prpl'} `} data-type="test" onClick={props.handleType}>Test</span>
			</div>	
			<div className="flex">
				<span className={`br4 ba ph4 pv2 mr3 pointer fw6 b--prpl ${letterType===1?'bg-prpl white':'prpl'}`} onClick={handleAlphabets}>Alphabets</span>
				<span className={`br4 ba ph4 pv2 pointer fw6 b--prpl  ${letterType===2?'bg-prpl white':'prpl'}`} onClick={handleDigits}>Digit</span>
			</div>
		</div>
	)
}
Header.propTypes = {
setLetterType:PropTypes.func.isRequired,
handleType:PropTypes.func.isRequired,
// letterType:PropTypes.int.isRequired,
};
	


export default Header;
