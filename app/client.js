import React from 'react'
import {
	render
} from 'react-dom'

import {
	Provider
} from 'react-redux';


import Router from './routes.js'
import configureStore from './store/configureStore';

class Root extends Comment {
	render() {
		return (
			<Provider store={store}>
				<Router></Router>
			</Provider>
		)
	}
}

const store = configureStore();
render(
	Root,
	document.getElementById('root')
)