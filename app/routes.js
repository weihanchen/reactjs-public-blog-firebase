import React from 'react'
import {
	Redirect,
	Route,
	IndexRoute,
	hashHistory,
	browserHistory
} from 'react-router'

//import components
import App from './components/App'
import {
	DetailContainer,
	HomeContainer
} from './containers/pages'
import Editor from './components/Editor/Editor.js'
const Routes = (
	<Route path='/' component={App}>
		<IndexRoute  component={HomeContainer} />
		<Route path='/create' component={Editor}></Route>
		<Route path="/detail" component={DetailContainer}></Route>
		<Route path='/home' component={HomeContainer}></Route>
	</Route>
)

export default Routes