import React, {
	Component,
	PropTypes
} from 'react'

class EditHeader extends Component {
	constructor(props) {
		super(props)
		const {
			title
		} = this.props
		this.state = {
			title: title
		}
	}
	onInputChange(e) {
		const {
			handleTitleInputChange
		} = this.props
		handleTitleInputChange(e.target.value)
		this.setState({
			title: e.target.value
		})
	}

	render() {
		return (
			<div>
				標題：
				<p></p>
				<input type="text" className="form-control" value={this.state.title} onChange={this.onInputChange.bind(this)} />
			</div>
		)
	}
}

EditHeader.propTypes = {
	title: PropTypes.string,
	handleTitleInputChange: PropTypes.func
}

export default EditHeader