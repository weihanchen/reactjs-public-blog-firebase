import React from 'react'
import {
	Redirect,
	Router,
	Route,
	IndexRoute,
	browserHistory
} from 'react-router'

//import components
import App from './containers/APP.js'
import Home from './components/Home/Home.js'

const router = (
	<Router history= {browserHistory}>
		<Route path='/' component = {App}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
)

export default router