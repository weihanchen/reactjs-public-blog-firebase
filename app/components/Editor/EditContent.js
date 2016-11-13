import React, {
	Component,
	PropTypes
} from 'react'
var ReactQuill = require('react-quill');

class EditContent extends Component {

	constructor(props) {
		super(props)
		const {
			content
		} = this.props
		this.state = {
			content: content
		}
	}
	onTextChange(content) {
		const {
			handleContentChange
		} = this.props
		this.setState({
			content: content
		});
		handleContentChange(content)
	}
	render() {
		return (
			<div>
				 <ReactQuill theme="snow"
                  value={this.state.content}
                  onChange={this.onTextChange.bind(this)} />
			</div>
		)
	}
}

EditContent.propTypes = {
	content: PropTypes.string,
	handleContentChange: PropTypes.func
}

export default EditContent