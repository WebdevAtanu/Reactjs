export function Child(prop){
	const data={id:1001,name:"Atanu"}
	return(
		<button onClick={()=>prop.propFunc(data)}>Click Me</button>
	)
}