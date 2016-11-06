import firebase from '../../Firebase'
import {
	converterUtils
} from '../../../utils'

class postService {
	getPostsList() {
		let postsFirebase = firebase.child('publicBlog')
		let promise = new Promise((resolve, reject) => {
			try {
				postsFirebase.on('value', function(snapshot) {
					let posts = converterUtils.mergeArrayObjectWithKey(snapshot.val().datas)
					posts.sort((pre, curr) => {
						return new Date(curr.postDate) - new Date(pre.postDate)
					})
					resolve(posts)
				})
			} catch (err) {
				reject(err.message)
			}
		})
		return promise
	}
}

export default postService