import React, {
	Component
} from 'react'



class Spinner extends Component {
	render() {
		return (
			<div className="text-center">
				<i className="fa fa-spinner fa-spin fa-5x fa-fw"></i>
				<span className="sr-only">Loading...</span>
			</div>
		)
	}
}

export default Spinner