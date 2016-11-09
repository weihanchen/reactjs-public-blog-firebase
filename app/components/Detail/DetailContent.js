import React, {
	Component,
	PropTypes
} from 'react'

import Spinner from '../Spinner'
import ErrorContent from '../ErrorContent'

class DetailContent extends Component {
	render() {
		const {
			post
		} = this.props
		console.log(post)
		let renderStatus = {
			loading: function() {
				return <Spinner />
			},
			success: function() {
				return (
					<div>
						<h3>{post.title}</h3>
						<label className="label label-success">
							{post.postDate}
						</label>
					</div>
				)
			},
			error: function() {
				return <ErrorContent message={post.error} />
			}
		}
		if (renderStatus.hasOwnProperty(post.status)) return renderStatus[post.status]()
		return <div></div>

	}
}

DetailContent.propTypes = {
	post: PropTypes.object
}

export default DetailContent