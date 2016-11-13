import {
	watchRequestFetchPosts
} from './fetchPostsList'

import {
	watchRequestCreatePost,
	watchRequestDeletePost,
	watchRequestFetchPost,
	watchRequestUpdatePost
} from './post'

export default function* rootSaga() {
	yield [
		watchRequestCreatePost(),
		watchRequestDeletePost(),
		watchRequestFetchPosts(),
		watchRequestFetchPost(),
		watchRequestUpdatePost()
	]
}