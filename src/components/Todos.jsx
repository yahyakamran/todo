const Todos = ({todos}) => {
    return (
	<ul>
	{
	    todos.map((todo)=>(
	        <li key={todo}>{todo}</li>
	    ))
	}
	</ul>
    );
}

export default Todos;
