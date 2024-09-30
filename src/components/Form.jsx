import { useContext, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";

const Form = ({addTodo , setCounter}) => {
    const [ todo , setTodo ] = useState("");
    const [ count , setCount ] = useState(0);

    const {darkMode} = useContext(DarkModeContext);

    function handleSubmit(e){
	e.preventDefault();
	if (!todo) {
	    alert("Name is required");
	    return;
	}
	addTodo(todo);
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
	    <input value={todo} onChange={handleChange} placeholder="Enter Todo"
		className={darkMode ? "dark-input" : ""}
	    />
	    <button type="submit" id="submitTodo"
		className={darkMode ? "dark-btn" : ""}
		onClick={handleSubmit}
	    > Add Todo </button>
	    <br/>
	    <input placeholder="Enter Countdown" onChange={handleCounterChange}
		className={darkMode ? "dark-input" : ""}
	    />
	    <button onClick={handleCounterUpdate}
		className={darkMode ? "dark-btn" : ""}
	    >Update</button>
	</form>
    )
}

export default Form;
