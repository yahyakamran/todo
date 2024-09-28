import { useState } from "react";

const Form = ({todos , setTodos ,setCounter}) => {
    const [ todo , setTodo ] = useState("");
    const [ count , setCount ] = useState(0);

    function handleSubmit(e){
	e.preventDefault();
	if (!todo) {
	    alert("Name is required");
	    return;
	}
	setTodos([...todos , todo]);
	setTodo("");
    }

    function handleChange (e){
	setTodo(e.target.value);
    }

    function handleCounterUpdate(e){
	e.preventDefault();
	if(!count || isNaN(count)){
	    alert("Number is required");
	}
	setCounter(count);
    }

    function handleCounterChange(e){
	setCount(e.target.value);
    }

    return (
	<form>
	    <input value={todo} onChange={handleChange} placeholder="Enter Todo"/>
	    <button type="submit" id="submitTodo"
		onClick={handleSubmit}
	    > Add Todo </button>
	    <br/>
	    <input placeholder="Enter Countdown" onChange={handleCounterChange}/>
	    <button onClick={handleCounterUpdate}>Update</button>
	</form>
    )
}

export default Form;
