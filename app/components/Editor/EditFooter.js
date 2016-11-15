import React, {
	Component,
	PropTypes
} from 'react'
import {
	Link
} from 'react-router'

class EditFooter extends Component {

	componentWillMount() {
		const {
			handleCreatePost
		} = this.props
		if (handleCreatePost) {
			this.state = {
				checkText: '確定新增'
			}
		} else {
			this.state = {
				checkText: '修改完成'
			}
		}

	}

	onUpdateClicked() {
		const {
			handleUpdatePost,
			handleCreatePost
		} = this.props
		if (handleUpdatePost) handleUpdatePost()
		if (handleCreatePost) handleCreatePost()
	}

	render() {
		const {
			actionEnabled
		} = this.props
		return (
			<div>
				<button className="btn btn-success" disabled={!actionEnabled} onClick={this.onUpdateClicked.bind(this)}>
					<i className="fa fa-check"></i> {this.state.checkText}
				</button>
				<span className="gap"></span>
				<Link className="btn btn-default" to={`/home`}>
					<i className="fa fa-home"></i> 回首頁
				</Link>
			</div>
		)
	}
}

EditFooter.propTypes = {
	actionEnabled: PropTypes.boolean,
	handleCreatePost: PropTypes.func,
	handleUpdatePost: PropTypes.func
}

export default EditFooter