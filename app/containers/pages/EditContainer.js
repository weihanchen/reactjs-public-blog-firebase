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
//components
import {
	EditHeader,
	EditContent,
	EditFooter
} from '../../components/Editor'
import Spinner from '../../components/Spinner'
import ErrorContent from '../../components/ErrorContent'

//actions
import {
	requestFetchPost,
	requestUpdatePost
} from '../../actions'

class EditContainer extends Component {

	constructor(props) {
		super(props)
	}

	handleContentChange(content) {
		this.setState({
			content: content
		})
	}

	handleTitleInputChange(title) {
		this.setState({
			title: title
		})
	}

	handleUpdatePost() {
		this.props.requestUpdatePost(this.state.id, this.state.title, this.state.content)
	}

	componentWillReceiveProps(nextProps) {
		const {
			post
		} = nextProps
		let id = this.props.params.id
		this.state = {
			id: id,
			title: post.title,
			content: post.content
		}
		if (post && post.status === 'update_success') hashHistory.push(`/detail/${id}`)
	}

	componentDidMount() {
		const {
			post
		} = this.props
		let id = this.props.params.id
		this.props.requestFetchPost(id)
		setTitle('Edit Post')
	}

	render() {
		let self = this;
		const {
			post
		} = self.props
		let renderStatus = {
			loading: function() {
				return <Spinner />
			},
			fetch_success: function() {
				return (
					<div className="container-border">
						<EditHeader title={post.title} handleTitleInputChange={self.handleTitleInputChange.bind(self)} />
						<hr/>
						<EditContent content={post.content} handleContentChange={self.handleContentChange.bind(self)} />
						<hr/>
						<EditFooter handleUpdatePost={self.handleUpdatePost.bind(self)} />
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

const mapStateToProps = (state) => {
	return {
		post: state.post
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		requestFetchPost,
		requestUpdatePost
	}, dispatch)
}

EditContainer.propTypes = {
	post: PropTypes.object,
	requestFetchPost: PropTypes.func,
	requestUpdatePost: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer)