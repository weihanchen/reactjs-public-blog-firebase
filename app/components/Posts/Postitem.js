import React, {
	Component,
	PropTypes
} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
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
			<div styleName='container-border'>
				<i>{converterUtils.toDatetime(post.postDate)}</i>
				<hr />
				<h3>
					<Link to={`/detail`}>
	           			{post.title}
	            	</Link>	
				</h3>
			</div>
		)
	}
}

export default CSSModules(PostItem, styles)

PostItem.propTypes = {
	post: PropTypes.object
}