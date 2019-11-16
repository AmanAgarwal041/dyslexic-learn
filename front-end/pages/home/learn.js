import React,{useRef} from 'react';
import Header from './header';
import CanvasDraw from "react-canvas-draw";

const Learn = props => {
	const canvasValue=useRef(null);
	

	const handleClear=()=>{
		canvasValue.current.clear();
	}
	const handleUndo=()=>{
		canvasValue.current.undo();
	}
	const handleData=()=>{
		console.log(canvasValue.current.canvas.drawing.toDataURL("image/png"));
		// canvasValue.current
	}
	return(
	<div className="flex flex-grow-1 flex-column ph3">
		<Header handleType={props.handleType} type="learn"/>
		<div className="flex flex-grow-1 items-center mt4 ph4">
		<div className="flex justify-between mv3 w-100">
			<div className="flex flex-column items-center w-25">
				<span className="b f4 mb3 prpl">Digits</span>
				<span className="ba f-18 flex  items-center justify-center w-100 bg-ylw b--ylw prpl">A</span>
			</div>
			
			<div className="flex flex-column items-center justify-center">
				<button type="submit" className=" b b--black ba bn f4 mb3 ph4 pointer prpl pv2">Speak</button>
				<button type="submit" className=" b b--black ba bn f4 mb3 ph4 pointer prpl pv2" onClick={handleData}>Test</button>
			</div>
			<div className="flex flex-column items-center w-25">
				<span className="b f4 mb3 prpl">Canvas Draw</span>
				<CanvasDraw style={{height:'20rem',width:"100%"}} brushColor="red" ref={canvasValue}/>
				<div className="flex mt3">
					<span className="mr3 bn white fw6 ph3 pv2 pointer bg-pnk" onClick={handleClear}>Clear</span>
					<span className=" bn ph3 white fw6 pv2 pointer bg-pnk" onClick={handleUndo}>Undo</span>
				</div>
			</div>
		</div>
		<button type="submit" className="absolute b bn bg-prpl bottom-2 f4 flex items-center justify-center ph4 pv2 right-2 w-10 white">Next</button>
		</div>	
	</div>
	)
}
	


export default Learn;
