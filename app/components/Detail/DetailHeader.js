import React, {
	Component,
	PropTypes
} from 'react'
import {
	Link
} from 'react-router'

class DetailHeader extends Component {
	onDeleteClicked() {
		const {
			handleDeletePost
		} = this.props
		handleDeletePost()
	}

	render() {
		const {
			id
		} = this.props
		return (
			<div>
				<Link className="btn btn-lg btn-default" to={`/edit/${id}`}>
					<i className="fa fa-edit fa-fw"></i>
				</Link>
				<button className="btn btn-lg btn-default" onClick={this.onDeleteClicked.bind(this)}>
					<i className="fa fa-trash-o fa-fw"></i>
				</button>
				<Link className="btn btn-lg btn-default" to={`/home`}>
					<i className="fa fa-home fa-fw"></i>
				</Link>
			</div>
		)
	}
}

DetailHeader.propTypes = {
	id: PropTypes.string,
	handleDeletePost: PropTypes.func
}

export default DetailHeader