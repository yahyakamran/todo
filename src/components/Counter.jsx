import { useEffect } from "react";

const Counter = ({counter , setCounter , setTodos}) => {

    useEffect(()=>{
	const timerInterval = setInterval(() => {
	   setCounter((prevTime) => {
	    if (prevTime === 0) {
	        clearInterval(timerInterval);
	        setTodos([])
    	    	return 0;
    	    } else {
	        return prevTime - 1;
    	    }
    	  });
    	}, 1000);

    	return () => clearInterval(timerInterval);
    },[counter])
    return (
	<h1>{`Counter : ${counter}`}</h1>
    )
}

export default Counter;
