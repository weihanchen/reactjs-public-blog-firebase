import React, {
	Component,
	PropTypes
} from 'react'
import {
	connect
} from 'react-redux'
import {
	bindActionCreators
} from 'redux'
import {
	pushState,
	hashHistory
} from 'react-router'
import {
	setTitle
} from '../../utils/index'
//compoments
import {
	DetailHeader,
	DetailContent
} from '../../components/Detail'

//actions
import {
	requestDeletePost,
	requestFetchPost
} from '../../actions'

class DetailContainer extends Component {

	handleDeletePost() {
		let id = this.props.params.id
		this.props.requestDeletePost(id)
	}


	componentWillReceiveProps(nextProps) {
		const {
			post
		} = nextProps

		if (post && post.status === 'delete_success') hashHistory.push(`/home`)
	}

	componentDidMount() {
		setTitle('Post Detail');
		this.props.requestFetchPost(this.props.params.id)
	}
	render() {
		const {
			post
		} = this.props
		return (
			<div className="container-border">
				<DetailHeader id={this.props.params.id} handleDeletePost={this.handleDeletePost.bind(this)} />
				<hr />
				<DetailContent post={post}  />
				<hr/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.post
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		requestDeletePost,
		requestFetchPost
	}, dispatch)
}

DetailContainer.propTypes = {
	post: PropTypes.object,
	requestDeletePost: PropTypes.func,
	requestFetchPost: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)