import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './redux/store'

import App from './App'
import './assets/styles/app.scss'

require('normalize-css')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
