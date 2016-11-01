import React from 'react'
import styles from './styles.css'

import PostItem from './PostItem';

class Posts extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			redirecting: false
		}
	}
	render() {
		let posts = this.props.posts.map(post => {
			<PostItem post={post}></PostItem>
		})
		return (
			<div className="container-border">
				{posts}
			</div>
		)
	}
}