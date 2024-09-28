import { useState } from "react"
import Form from "./components/Form"
import Todos from "./components/Todos";
import Counter from "./components/Counter";

function App() {
    const [ todos , setTodos ] = useState(["Finish Project" , "Git Init"]);
    const [ counter , setCounter ] = useState(60);
    return (
	<>
	    <Counter counter={counter} setCounter={setCounter} setTodos={setTodos}/>
	    <Todos todos={todos}/>
	    <Form todos={todos} setTodos={setTodos} setCounter={setCounter}/>
	</>
    )
}

export default App
