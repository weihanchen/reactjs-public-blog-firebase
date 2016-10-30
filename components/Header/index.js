import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Header extends React.Component {
	render() {
		return <div className='text-center'>
    		 <h1 className='page-header header-text'>
    		 	Single Page Application Blog
    		 	<small>Simple CRUD</small>
    		 </h1>
    	   </div>
	}
}

export default CSSModules(Header, styles)