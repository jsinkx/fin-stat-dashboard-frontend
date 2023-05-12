import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './assets/styles/app.scss'

require('normalize-css')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
