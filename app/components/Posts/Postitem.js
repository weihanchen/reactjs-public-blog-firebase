import React, {
	Component,
	PropTypes
} from 'react'

import {
	Link
} from 'react-router'
import {
	converterUtils
} from '../../utils'
class PostItem extends Component {
	render() {
		let post = this.props.post;
		return (
			<div className='container-border'>
				<i className="fa fa-calendar-o"><i> {converterUtils.toDatetime(post.postDate)}</i></i>
				<hr />
				<h3>
					<Link to={`/detail/${post.key}`}>
	           			{post.title}
	            	</Link>	
				</h3>
			</div>
		)
	}
}

export default PostItem

PostItem.propTypes = {
	post: PropTypes.object
}