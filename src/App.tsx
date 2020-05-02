import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Notice from './Notice'
import Sidebar from './Sidebar'

// interface props {
// 	data: string,
// }

const App = () => (
	<BrowserRouter>
		<div>
			<Sidebar />
			<Route exact path='/' component={Home} />
			<Route path='/Notice' component={Notice} />
			{/* <p>{props}</p> */}
			{/* <p>{this.props.data}</p> */}
		</div>
	</BrowserRouter>
)

export default App