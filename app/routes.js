import React from 'react'
import {
	Redirect,
	Router,
	Route,
	IndexRoute,
	hashHistory,
	browserHistory
} from 'react-router'

//import components
import App from './components/App/APP.js'
import Home from './components/Home/Home.js'
import Editor from './components/Editor/Editor.js'

const router = (
	<Router history= {hashHistory}>
		<Route path='/' component={App}>
			<Router path='create' component={Editor}></Router>
			<Router path='home' component={Home}></Router>
			<IndexRoute  component={Home}></IndexRoute>
		</Route>
	</Router>
)

export default router