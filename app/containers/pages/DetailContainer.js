import React, {
	Component,
	PropTypes
} from 'react'

//compoments
import {
	DetailHeader,
	DetailContent
} from '../../components/Detail'

class DetailContainer extends Component {
	render() {
		return (
			<div className="container-border">
				<DetailHeader />
				<hr />
				<DetailContent />
			</div>
		)
	}
}

export default DetailContainer