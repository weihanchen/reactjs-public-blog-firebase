import React from 'react'
import {
	render
} from 'react-dom'
import {
	Router,
	browserHistory
} from 'react-router';
import {
	Provider
} from 'react-redux';


import routes from './routes.js'
import store from './store/configureStore';



render(
	<div>
		<Provider store={store}>
			<Router children={routes} history={browserHistory} />
		</Provider>
	</div>,
	document.getElementById('root')
)