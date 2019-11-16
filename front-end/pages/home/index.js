import React,{useState} from 'react';
import Learn from './learn';
import Test from './test';
import CanvasDraw from "react-canvas-draw";

const Home = props => {
	
	const [type,setType]=useState('learn');
	const handleType=(e)=>{
		const {type}=e.currentTarget.dataset;
		setType(type)
	}


if(type==='test') return <Test handleType={handleType}/>;
return <Learn handleType={handleType}/>;
}
	


export default Home;
