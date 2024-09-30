import { createContext , useReducer } from "react";

function darkModeReducer(state , action){
    switch(action.type){
	case "toggle" : {
	    return {
		darkMode : !state.darkMode
	    }
	}
	case "dark" : {
	    return {
		darkMode : true
	    }
	}
	default:
	    return;
    }
}

const INITIAL_STATE = {
    darkMode : false
}

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(darkModeReducer , INITIAL_STATE);

    return (
	<DarkModeContext.Provider value={{darkMode : state.darkMode , dispatch}}>{children}</DarkModeContext.Provider>
    )
}
