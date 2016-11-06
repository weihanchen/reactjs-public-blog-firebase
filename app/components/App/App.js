import React from 'react'
import {
	connect
} from 'react-redux';
//import components
import Header from '../Header/Header.js'
import Body from '../Body/Body.js'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Header></Header>
				<Body children={this.props.children} {...this.props}></Body>
			</div>
		)
	}
}

export default App