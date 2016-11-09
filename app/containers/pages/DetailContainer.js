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
	setTitle
} from '../../utils/index'
//compoments
import {
	DetailHeader,
	DetailContent
} from '../../components/Detail'

//actions
import {
	requestFetchPost
} from '../../actions'

class DetailContainer extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() {
		setTitle('Post Detail');
		this.props.requestFetchPost(this.props.params.id)
	}
	render() {
		return (
			<div className="container-border">
				<DetailHeader />
				<hr />
				<DetailContent {...this.props} />
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
		requestFetchPost
	}, dispatch)
}

DetailContainer.propTypes = {
	post: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)