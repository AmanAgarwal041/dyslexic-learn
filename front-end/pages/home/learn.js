import React,{useRef,useState} from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import listdata from '../../queries/listdata.gql';
import getchar from '../../queries/getchar.gql';
import  Header from './header';
import CanvasDraw from "react-canvas-draw";
import noop from '../../helpers/noop';

const Learn = props => {
	const canvasValue=useRef(null);
	const [letter,setLetter]=useState(0)
	const [image,setImage]=useState('')
	const [letterType,setLetterType]=useState(1);

	const onSpeak = e => {
		const {text}=e.currentTarget.dataset;
		const sp = new SpeechSynthesisUtterance(text.toLowerCase());
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
		setImage(canvasValue.current.canvas.drawing.toDataURL("image/png"))
		// canvasValue.current
	}
	const handleNext=()=>{
		handleClear();
		setImage('');
		if((letterType===1 && letter<26)||(letterType===2&&letter<100)) setLetter(letter+1);
	}

	return(
		
		<div className="flex flex-grow-1 flex-column ph3">
		<Header handleType={props.handleType} type="learn" setLetterType={setLetterType} letterType={letterType}/>
		<div className="flex flex-grow-1 items-center mt4 ph4">
		<div className="flex justify-between mv3 w-100">
			
				<Query
			query={listdata}
			variables={{
			offset:letter,typeid:letterType,lang:"en"
				
			}}
			fetchPolicy="cache-and-network"
		>
			{({ data,loading }) => {
				const {getListData:{name}={}}=data||{};
				return(<Query
					query={getchar}
			skip={!image}
			variables={{image}}
			
			fetchPolicy="cache-and-network"
		>
			{({ data:charData, loading: loadingN }) => {
				const { getCharacter } = charData || {};
				console.log(getCharacter, loadingN, name, getCharacter == name);
				return (
					<>
					<div className="flex flex-column items-center w-25">
				<span className="b f4 mb3 prpl">Digits </span>
				<span className="ba f-18 flex  items-center justify-center w-100 bg-ylw b--ylw prpl">{name}</span>
				</div>
				<div className="flex flex-column items-center justify-center">
				<button type="submit" className=" b b--black ba bn f4 mb3 ph4 pointer prpl pv2" data-text={name} onClick={onSpeak}>Speak</button>
				<button type="submit" className={`b b--black ba bn f4 mb3 ph4 pointer prpl pv2`} onClick={loading ? noop : handleData}>{loadingN ? 'Loading' : 'Test'}</button>
				{getCharacter && !loadingN ? (
						getCharacter == name ? 
						<span className="f3 green"> &#10003; </span> : 
						<span className="f3 red"> &#10007;</span>
					) : null
				}
			</div>
				</>)
				}}
				
				</Query>)
				}}
				</Query>
			
			
			<div className="flex flex-column items-center w-25">
				<span className="flex mb3"><span className="b f4 mr3 prpl">Canvas Draw</span></span>
				<CanvasDraw style={{height:'20rem',width:"100%"}} brushColor="red"  catenaryColor="green" ref={canvasValue}/>
				<div className="flex mt3">
					<span className="mr3 bn white fw6 ph3 pv2 pointer bg-pnk" onClick={handleClear}>
						Clear
					</span>
					<span className=" bn ph3 white fw6 pv2 pointer bg-pnk" onClick={handleUndo}>
						Undo
					</span>
				</div>
			</div>
		</div>
		<button type="submit" className="absolute b bn bg-prpl bottom-2 f4 flex items-center justify-center ph4 pv2 right-2 w-10 white pointer" onClick={handleNext}>Next</button>
		</div>	
	</div>)
				
			
		
	
}
	Learn.propTypes={
		handleType:PropTypes.func.isRequired,
	}


export default Learn;
