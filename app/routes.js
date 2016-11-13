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
	CreateContainer,
	DetailContainer,
	EditContainer,
	HomeContainer
} from './containers/pages'
const Routes = (
	<Route path='/' component={App}>
		<IndexRoute  component={HomeContainer} />
		<Route path='/create' component={CreateContainer}></Route>
		<Route path='/edit/:id' component={EditContainer}></Route>
		<Route path="/detail/:id" component={DetailContainer}></Route>
		<Route path='/home' component={HomeContainer}></Route>
	</Route>
)

export default Routes