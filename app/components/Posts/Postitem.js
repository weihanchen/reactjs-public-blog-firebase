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
		let {
			id,
			title,
			postDate
		} = this.props;
		return (
			<div className='container-border'>
				<i className="fa fa-calendar-o"><i> {converterUtils.toDatetime(postDate)}</i></i>
				<hr />
				<h3>
					<Link to={`/detail/${id}`}>
	           			{title}
	            	</Link>	
				</h3>
			</div>
		)
	}
}

export default PostItem

PostItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	postDate: PropTypes.string
}