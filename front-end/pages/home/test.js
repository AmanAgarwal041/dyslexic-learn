import React,{useRef,useState,useEffect} from 'react';
import { Query } from 'react-apollo';
// import ReactCountdownClock from 'react-countdown-clock';
import Header from './header';
import getchar from '../../queries/getchar.gql';
import quizdata from '../../queries/quizdata.gql';
import PropTypes from 'prop-types';
import CanvasDraw from "react-canvas-draw";
import Timer from '../../components/timer';



const Canvas=({data,letterType})=>{
const [image,setImage]=useState('')
	const [letter,setLetter]=useState(-1)
	const [submitted, setSubmitted] = useState(false);
	const canvasValue=useRef(null);

	useEffect(() => {
		global.resultSet = {};
		return () => {
			global.resultSet = {};
		};
	}, []);

	const storeData = (key, obj) => {
		console.log(key, obj);
		if (key < 0) {
			return;
		}

		if (global.resultSet[key]) {
			global.resultSet[key] = {
				...global.resultSet[key],
				...obj,
			};
		}

		global.resultSet[key] = obj;
	};
	
	useEffect(()=>{
		if(letter===-1) return;
	onSpeak(data[letter].name);
	},[letter])

	const onSpeak = val => {
		const sp = new SpeechSynthesisUtterance(val.toLowerCase());
		window.speechSynthesis.speak(sp);
	}

	const handleClear=()=>{
		canvasValue.current.clear();
	}
	const handleUndo=()=>{
		canvasValue.current.undo();
	}
	
	const handleSkip=()=>{
		if(letter<26) setLetter(letter+1)
		
	}
	const handleStart=()=>{
	setLetter(0);
	}	
	const handleNext=()=>{
			setImage(canvasValue.current.canvas.drawing.toDataURL("image/png"))
				canvasValue.current.clear();
			if((letterType===1 && letter<26)||(letterType===2&&letter<100)) setLetter(letter+1)
	};
	const handleSubmit = () => {
		setImage(canvasValue.current.canvas.drawing.toDataURL("image/png"))
		canvasValue.current.clear();
		setSubmitted(true);
	};

	return(
		<>
<Query
					query={getchar}
			skip={!image}
			variables={{image}}
			
			fetchPolicy="cache-and-network"
		>
			{({ data: dataM, loading: loadingM }) => {
				const { getCharacter } = dataM || {};
				if (dataM && !loadingM) {
					storeData(letter-1, { value: getCharacter });
					if (submitted) {
						const stats = data.reduce((acc, val, idx) => {
							if (global.resultSet && global.resultSet[idx] && global.resultSet[idx].value.toLowerCase() == val.name.toLowerCase()) {
								acc.correct += 1;
							} else {
								acc.wrong += 1;
							}
							return acc;
						}, { correct: 0, wrong: 0 });

						return (
							<div className="flex flex-column">
								<div className="green">Correct : {stats.correct}</div>
							</div>
						);
					}
				}

				return null
				}}
			</Query>
<div className="flex flex-column w-100">

		<div className="flex  mv3">			
			<div className="flex flex-column items-center w-25 center">
				<span className="b f4 mb3 prpl">Canvas Draw</span>
				<CanvasDraw style={{height:'16rem',width:"100%"}} brushColor="red" ref={canvasValue}/>
				
			</div>
			
		</div>
		
		<div className="flex mv4 items-center justify-center">
				{letter===-1?null:<button type="submit" className=" ph4 pv2  bg-pnk fw6 bn white mr3 pointer bn" onClick={() => onSpeak(data[letter].name)}>Speak</button>}
				
				<span className="mr3 ba ph3 pv2 pointer fw6 bn bg-pnk white" onClick={handleClear}>Clear</span>
					<span className=" ba ph3 pv2 pointer bg-pnk fw6 bn white" onClick={handleUndo}>Undo</span>
		</div>
		<div className="flex justify-between mt3">
			
			{letter===-1?<button type="submit" className="b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer" onClick={handleStart}>Start Test</button>:<><button type="submit" className="b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer" onClick={handleSubmit}>Submit Test</button>
			
			<button type="submit" className="b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer" onClick={handleSkip}>Skip</button>
<button type="submit" className="b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer" onClick={handleNext}>Next</button>
		</>}

		</div>

	</div>
	</>
		)
}
Canvas.propTypes={
	data:PropTypes.array.isRequired,
}


const Test = props => {
	const [letterType,setLetterType]=useState(1);
	return(
	<div className="flex flex-grow-1 flex-column ph3">
	<Header handleType={props.handleType} type="test" setLetterType={setLetterType} letterType={letterType}/>
		<div className="flex flex-grow-1 items-center mt4 ph4">
				<Query
			query={quizdata}
			variables={{
			typeid:letterType,lang:"en"
				
			}}
			fetchPolicy="cache-and-network"
		>
			{({ data,loading }) => {
				
				const {getQuizData}=data||{};
				if(!getQuizData|| getQuizData.length===0) return null;
				return <Canvas data={getQuizData} letterType={letterType}/>
	}}
	</Query>	
		
		
		</div>	
	</div>
	)
}
	Test.propTypes={
		handleType:PropTypes.func.isRequired,
	}


export default Test;
