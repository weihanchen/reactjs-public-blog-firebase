import React from 'react'
import {
	connect
} from 'react-redux';
//import components
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Header />
				<Body children={this.props.children} {...this.props}></Body>
				<Footer />
			</div>
		)
	}
}

export default App