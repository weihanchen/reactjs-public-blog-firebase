import React from 'react'
import {
	Link
} from 'react-router'

class Header extends React.Component {
	render() {
		return (<div className='text-center header' >
    		 <h1 className='page-header header-text'>
	    		<Link to={`/create`} className="btn btn-warning pull-right">
	           		新文章
	            </Link>	
    		 	Single Page Application Blog
    		 	<small> Simple CRUD</small>
    		 </h1>
    	   </div>)
	}
}

export default Header