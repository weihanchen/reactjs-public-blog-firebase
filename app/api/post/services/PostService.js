import firebase from '../../Firebase'
import {
	converterUtils
} from '../../../utils'

class postService {
	createPost(title, content) {
		let postFirebase = firebase.child('publicBlog').child('datas')
		let post = {
			content: content,
			postDate: new Date().toISOString(),
			shortContent: '',
			title: title
		}
		let promise = new Promise((resolve, reject) => {
			try {
				postFirebase.push(post, function() {
					resolve(post)
				});
			} catch (e) {
				reject(e.message)
			}
		})
		return promise
	}

	deletePost(id) {
		let postFirebase = firebase.child('publicBlog').child('datas').child(id)
		let promise = new Promise((resolve, reject) => {
			try {
				postFirebase.remove(function() {
					resolve()
				});
			} catch (e) {
				reject(e.message)
			}
		})
		return promise
	}

	getPost(id) {
		let postFirebase = firebase.child('publicBlog').child('datas').child(id)

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

	updatePost(id, title, content) {
		let postFirebase = firebase.child('publicBlog').child('datas').child(id)
		let post = {
			content: content,
			postDate: new Date().toISOString(),
			shortContent: '',
			title: title
		}
		let promise = new Promise((resolve, reject) => {
			try {
				postFirebase.update(post, function() {
					resolve(post)
				});
			} catch (e) {
				reject(e.message)
			}
		})
		return promise
	}
}

export default postService