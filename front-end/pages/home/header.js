import React from 'react';
import CanvasDraw from "react-canvas-draw";

const Header = props => {
	return(
		<div className="flex  mv3 justify-between f4">
			<div className="">Logo</div>	
			<div className=" flex br-pill ba b--prpl ">
				<span className={`br--right3 pv2 ph4 pointer fw6  ${props.type==='learn'?'bg-prpl white':'prpl'} `} data-type="learn" onClick={props.handleType}>Learn</span>
				<span className={`br--left3 pv2 ph4 pointer fw6 ${props.type==='test'?'bg-prpl white':'prpl'} `} data-type="test" onClick={props.handleType}>Test</span>
			</div>	
			<div className="flex">
				<span className="br4 ba ph4 pv2 mr3 pointer fw6 b--prpl prpl">Alphabets</span>
				<span className="br4 ba ph4 pv2 pointer fw6 b--prpl prpl">Digit</span>
			</div>
		</div>
	)
}
	


export default Header;
