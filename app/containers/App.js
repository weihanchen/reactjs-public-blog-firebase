import React from 'react'

//import components
import Header from '../components/Header/Header.js'
import Body from '../components/Body/Body.js'

class App extends React.Component {
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