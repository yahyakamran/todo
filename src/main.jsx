import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from './DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
    <DarkModeContextProvider>
	<StrictMode>
	    <App />
	</StrictMode>,
    </DarkModeContextProvider>
)
