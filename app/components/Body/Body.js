import React from 'react'

class Body extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='row-fluid'>
				<div className="col-md-8 col-md-offset-2">
					 {React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		)
	}
}

export default Body