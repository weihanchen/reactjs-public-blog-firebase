import firebase from '../../Firebase';
import {
	mergeArrayObjectWithKey
} from '../../../utils/firebaseUtils';

class postService {
	getPostsList() {
		let postsFirebase = firebase.child('publicBlog');
		let promise = new Promise((resolve, reject) => {
			try {
				postsFirebase.on('value', function(snapshot) {
					let posts = mergeArrayObjectWithKey(snapshot.val());
					resolve(posts);
				});
			} catch (err) {
				reject(err.message);
			}
		});
		return promise;
	}
}