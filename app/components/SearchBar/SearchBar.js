import React, {
	Component
} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class SearchBar extends Component {
	render() {
		return (
			<div>
				<p></p>
				<div className="input-group">
					<span className="input-group-addon">
						<i className="fa fa-search fa fw"></i>
					</span>
					<input type="text" className="form-control" styleName="textbox-radius" placeholder="Search title..."/>
				</div>
			</div>
		)
	}
}

export default CSSModules(SearchBar, styles)