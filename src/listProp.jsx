export function ListProp(prop){
	return(
		<div className="App">
			<p key={prop.index}>{prop.data.id} {prop.data.name}</p>
		</div>
		)
}