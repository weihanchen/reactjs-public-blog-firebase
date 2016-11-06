import React from 'react'
import {
	connect
} from 'react-redux';
//import components
import Header from '../Header'
import Body from '../Body'

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