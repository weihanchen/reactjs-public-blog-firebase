import {
	watchRequestFetchPosts
} from './fetchPostsList'
import {
	watchRequestFetchPost
} from './fetchPost'

export default function* rootSaga() {
	yield [
		watchRequestFetchPosts(),
		watchRequestFetchPost()
	]
}