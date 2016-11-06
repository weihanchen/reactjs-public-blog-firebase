import React from 'react'
import {
	Link
} from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Header extends React.Component {
	render() {
		return (<div className='text-center' styleName='header'>
    		 <h1 className='page-header' styleName='header-text'>
    		 	<button className="btn btn-warning pull-right">
	    		 	<Link to={`/create`}>
	           			  新文章
	                </Link>
                </button>
    		 	Single Page Application Blog
    		 	<small>Simple CRUD</small>
    		 </h1>
    	   </div>)
	}
}

export default CSSModules(Header, styles)