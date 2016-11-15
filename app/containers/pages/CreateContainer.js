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
} from 'react-router';
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
	requestCreatePost,
	requestFetchPost
} from '../../actions'

class CreateContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			title: '',
			content: ''
		}
	}

	handleContentChange(content) {
		this.setState({
			content: content
		})
	}

	handleCreatePost() {
		console.log(this.state)
		this.props.requestCreatePost(this.state.title, this.state.content)
	}

	handleTitleInputChange(title) {
		this.setState({
			title: title
		})
	}


	componentWillReceiveProps(nextProps) {
		const {
			post
		} = nextProps
		this.state = {
			title: '',
			content: ''
		}
		if (post && post.status === 'create_success') hashHistory.push(`/home`)
	}

	componentDidMount() {
		setTitle('Create Post')
	}


	render() {
		let self = this;
		const {
			post
		} = self.props
		const footerActionEnabled = this.state.title.length > 0 && this.state.content.length > 0
		let renderStatus = {
			loading: function() {
				return <Spinner />
			},
			error: function() {
				return <ErrorContent message={post.error} />
			}
		}
		if (post && renderStatus.hasOwnProperty(post.status)) return renderStatus[post.status]()
		return (
			<div className="container-border">
				<EditHeader title={this.state.title} handleTitleInputChange={this.handleTitleInputChange.bind(this)} />
				<hr/>
				<EditContent content={this.state.content} handleContentChange={this.handleContentChange.bind(this)} />
				<hr/>
				<EditFooter handleCreatePost={this.handleCreatePost.bind(this)} actionEnabled={footerActionEnabled} />		
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
		requestCreatePost,
		requestFetchPost
	}, dispatch)
}

CreateContainer.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)