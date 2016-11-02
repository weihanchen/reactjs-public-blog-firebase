import React from 'react'
import {
	render
} from 'react-dom'

import {
	Provider
} from 'react-redux';


import Router from './routes.js'
import configureStore from './store/configureStore';

const store = configureStore();
render(
	<Provider store={store}>
		<Router></Router>
	</Provider>,
	document.getElementById('root')
)