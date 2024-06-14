import React from 'react';
import './index.css'
class ClassApp extends React.Component{
	
	constructor(){
		super();
		console.log("This is constructor");
		this.state={
			name:"Atanu",
		}
	}

render(){
	console.log("This is render");
	return(
		<div className="App">
		<h1>Hello World from Class Component</h1>
		<p>The state is called for name: {this.state.name}</p>
		</div>
		)
}
}
export default ClassApp;