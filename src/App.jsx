import { useContext, useEffect, useReducer } from "react"
import Form from "./components/Form"
import Todos from "./components/Todos";
import Counter from "./components/Counter";
import { DarkModeContext } from "./DarkModeContext.jsx";
import { Switcher } from "./components/Switcher.jsx";
import "./app.css"

function App() {
    const localCounter = JSON.parse(localStorage.getItem('counter')) || 60;
    const localTodos = JSON.parse(localStorage.getItem('todos')) || ["Finish Project" , "Git Init"];
    const [ todos , todoDispatch ] = useReducer(todoReducer , localTodos );
    const [ counter , counterDispatch ] = useReducer(counterReducer , localCounter);

    const {darkMode} = useContext(DarkModeContext);


    useEffect(()=>{
	localStorage.setItem('todos' , JSON.stringify(todos));
	localStorage.setItem('counter' , JSON.stringify(counter));
    },[todos , counter])


    function handleAddTodo(todo){
	todoDispatch(
	    {
		type : "added",
		todo : todo,
	    }
	);
    }

    function handleClearTodos(){
	todoDispatch(
	    {
		type : "clear"
	    }
	)
    }

    function todoReducer(todos , action){
	switch(action.type){
	    case "added" : {
		return [
		    ...todos , action.todo
		]
	    }
	    case "clear" : {
		return [];
	    }
	}
    }

    function setCounter(num){
	counterDispatch(
	    {
		type : "set" ,
		num  : num
	    }
	);
    }

    function counterReducer(counter , action){
	switch(action.type){
	    case "set" : {
		return action.num ;
	    }
	    case "decr" : {
		return counter - 1
	    }
	}
    }

    return (
	<div className={darkMode ? "dark app" : "app"}>
	<Switcher></Switcher>
	<Counter counter={counter} setCounter={setCounter} clearTodos={handleClearTodos}/>
	<Todos todos={todos}/>
	<Form addTodo={handleAddTodo} setCounter={setCounter}/>
	</div>
    )
}

export default App
