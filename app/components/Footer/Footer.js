import React from 'react'

class Footer extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-bottom">
				<div className="container-fluid text-center footer-text">
					This example is for React.js beginners,and you can see <a href="https://github.com/weihanchen/reactjs-public-blog-firebase">here</a> 
					,If you are interested in the version of angularjs can see <a href="https://plnkr.co/edit/4BaNDy?p=preview">here</a>
				</div>
			</nav>
		)
	}
}

export default Footer