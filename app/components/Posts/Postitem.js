import React from 'react'
import styles from './styles.css'

class Postitem extends React.Component {
	render() {
		let post = this.props.post;
		return (
			<div>
				<i>{post.postDate}</i>
				<hr />
				<Link to={`/detail`}>
	           		{post.title}
	            </Link>	
				<div>{post.content}</div>
			</div>
		)
	}
}