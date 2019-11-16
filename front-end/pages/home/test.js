import React,{useRef} from 'react';
import Header from './header';
import CanvasDraw from "react-canvas-draw";

const Test = props => {
	const canvasValue=useRef(null);
	
	const onSpeak = val => {
		const sp = new SpeechSynthesisUtterance(val);
		window.speechSynthesis.speak(sp);
	}

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
	<Header handleType={props.handleType} type="test"/>
		<div className="flex flex-grow-1 items-center mt4 ph4">
	<div className="flex flex-column w-100">
		<div className="flex  mv3">			
			<div className="flex flex-column items-center w-25 center">
				<span className="b f4 mb3 prpl">Canvas Draw</span>
				<CanvasDraw style={{height:'16rem',width:"100%"}} brushColor="red" ref={canvasValue}/>
				
			</div>
			
		</div>
		<div className="flex mv4 items-center justify-center">
				<button type="submit" className=" ph4 pv2  bg-pnk fw6 bn white mr3 pointer bn" onClick={() => onSpeak('1')}>Speak</button>
				<button type="submit" className="bn ph4 pv2 bg-pnk fw6 bn white  pointer mr3" onClick={handleData}>Test</button>
				<span className="mr3 ba ph3 pv2 pointer fw6 bn bg-pnk white" onClick={handleClear}>Clear</span>
					<span className=" ba ph3 pv2 pointer bg-pnk fw6 bn white" onClick={handleUndo}>Undo</span>
		</div>
	</div>		
		
		
		</div>	
	</div>
	)
}
	


export default Test;
