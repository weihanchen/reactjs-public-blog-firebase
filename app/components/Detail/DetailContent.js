import React, {
	Component,
	PropTypes
} from 'react'
import {
	converterUtils
} from '../../utils'

import Spinner from '../Spinner'
import ErrorContent from '../ErrorContent'
import ReactHtmlParser from 'react-html-parser';

class DetailContent extends Component {
	render() {
		const {
			post
		} = this.props

		let renderStatus = {
			loading: function() {
				return <Spinner />
			},
			success: function() {
				return (
					<div>
						
						<h3 className="text-info">{post.data.title}</h3>
						<label className="label label-success">
							<i className="fa fa-calendar"></i> {converterUtils.toDatetime(post.data.postDate)}
						</label>
						<p></p>
						<div>
							{ReactHtmlParser(post.data.content)}
						</div>
						<p></p>
						
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