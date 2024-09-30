import { useContext, useEffect } from "react";
import { DarkModeContext } from "../DarkModeContext";
import "./dark.css"

const Counter = ({counter , setCounter , clearTodos}) => {

    useEffect(()=>{
	localStorage.setItem('counter' , JSON.stringify(counter))
    },[counter])

    const { darkMode } = useContext(DarkModeContext);

    function evaluateCounter(prevTime , timerInterval){

	    if (prevTime === 0) {
	        clearInterval(timerInterval);
		clearTodos();
    	    	return 0;
    	    } else {
	        return prevTime - 1;
    	    }
    }

    useEffect(()=>{
	const prevTime = counter;
	const timerInterval = setInterval(() => {
	    const counter = evaluateCounter(prevTime , timerInterval);
	    setCounter(counter);
   	}, 1000);

    	return () => clearInterval(timerInterval);
    },[counter])

    return (
	<h1 className={darkMode ? "dark-text" : ""}>{`Counter : ${counter}`}</h1>
    )
}

export default Counter;
