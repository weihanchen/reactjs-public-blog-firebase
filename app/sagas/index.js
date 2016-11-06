import {
	watchRequestFetchPosts
} from './fetchPostsList'

export default function* rootSaga() {
	yield [
		watchRequestFetchPosts()
	]
}