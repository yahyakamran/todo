import { useContext } from "react"
import { DarkModeContext } from "../DarkModeContext"

export const Switcher = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { dispatch } = useContext(DarkModeContext);

    function handleSwitch(){
	dispatch({
	    type : "toggle"
	});
    }

    return (
	<button className={darkMode ? "dark-btn" : ""}  onClick={handleSwitch}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
    )
}
