import firebase from '../../Firebase'
import {
	converterUtils
} from '../../../utils'

class postService {
	getPost(id) {
		let postFirebase = firebase.child('publicBlog').child('datas').child(id);
		let promise = new Promise((resolve, reject) => {
			try {
				postFirebase.once("value", function(snapshot) {
					let post = snapshot.val()
					resolve(post)
				})
			} catch (err) {
				reject(err.message)
			}
		})
		return promise
	}
	getPostsList() {
		let postsFirebase = firebase.child('publicBlog')
		let promise = new Promise((resolve, reject) => {
			try {
				postsFirebase.once('value', function(snapshot) {
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