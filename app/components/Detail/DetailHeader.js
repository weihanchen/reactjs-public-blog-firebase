import React, {
	Component,
	PropTypes
} from 'react'
import {
	Link
} from 'react-router'

class DetailHeader extends Component {
	render() {
		return (
			<div>
				<a className="btn btn-lg btn-default">
					<i className="fa fa-edit fa-fw"></i>
				</a>
				<a className="btn btn-lg btn-default">
					<i className="fa fa-trash-o fa-fw"></i>
				</a>
				<Link className="btn btn-lg btn-default" to={`/home`}>
					<i className="fa fa-home fa-fw"></i>
				</Link>
			</div>
		)
	}
}

export default DetailHeader