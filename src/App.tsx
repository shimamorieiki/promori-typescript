import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Notice from './Notice'
import Sidebar from './Sidebar'

const App = () => (
	<BrowserRouter>
		<div>
			<Sidebar />
			<Route exact path='/' component={Home} />
			<Route path='/Notice' component={Notice} />
		</div>
	</BrowserRouter>
)

export default App