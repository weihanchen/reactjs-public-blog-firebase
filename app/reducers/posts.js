import {
	REQUEST_FETCH_POSTS,
	FAIL_TO_FETCH_POSTS,
	SUCCESS_FETCH_POSTS
} from '../actions/fetchPosts';
export default function posts(state = {
	status: 'init',
	data: [],
	error: null
}, action) {
	switch (action.type) {
		case REQUEST_FETCH_POSTS:
			return Object.assign({}, state, {
				status: 'loading',
				error: null
			})
			break
		case FAIL_TO_FETCH_POSTS:
			return Object.assign({}, state, {
				status: 'error',
				error: action.error
			})
			break
		case SUCCESS_FETCH_POSTS:
			return Object.assign({}, state, {
				status: 'success',
				data: action.posts
			})
			break
		default:
			return state
	}
}