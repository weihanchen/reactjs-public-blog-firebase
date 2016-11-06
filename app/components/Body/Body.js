import React from 'react'

class Body extends React.Component {
	constructor(props) {
		super(...arguments)
	}
	render() {
		return (
			<div className='row-fluid'>
				<div className="col-md-8 col-md-offset-2">
					 {this.props.children}
				</div>
			</div>
		)
	}
}

export default Body