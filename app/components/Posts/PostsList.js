import React, {
	Component,
	PropTypes
} from 'react';

import PostItem from './PostItem';
import Spinner from '../Spinner'

class PostsList extends Component {
	shouldComponentUpdate(nextProps) {
		return (nextProps.posts.status !== this.props.posts.status) ||
			(nextProps.posts.data[0] !== this.props.posts.data[0])
	}
	render() {
		const {
			posts
		} = this.props
		let renderStatus = {
			loading: function() {
				return <Spinner />
			},
			success: function() {
				const postsNode = posts.data.map(post => //use key avoid Each child in an array or iterator should have a unique "key" prop
					<PostItem key={post.key} post={post}></PostItem>
				)
				return (
					<div>
						{postsNode}
					</div>
				)
			}
		}
		if (renderStatus.hasOwnProperty(posts.status)) return renderStatus[posts.status]()
		return <div></div>
	}

}



export default PostsList