import React, {
	Component,
	PropTypes
} from 'react'


class SearchBar extends Component {

	render() {
		const {
			handleUpdateSearch
		} = this.props
		return (
			<div>
				<p></p>
				<div className="input-group">
					<span className="input-group-addon">
						<i className="fa fa-search fa fw"></i>
					</span>
					<input type="text" 
						   className="form-control textbox-radius" 
						   placeholder="Search title..."
						   onChange={(e) => handleUpdateSearch(e.target.value)}
						   />
				</div>
			</div>
		)
	}
}

SearchBar.propTypes = {
	handleUpdateSearch: PropTypes.func
}

export default SearchBar