import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Header.css'

class Header extends React.Component {
	render() {
		return (<div className='text-center' styleName='header'>
    		 <h1 className='page-header' styleName='header-text'>
    		 	<button className="btn btn-warning pull-right">新文章</button>
    		 	Single Page Application Blog
    		 	<small>Simple CRUD</small>
    		 </h1>
    	   </div>)
	}
}

export default CSSModules(Header, styles)