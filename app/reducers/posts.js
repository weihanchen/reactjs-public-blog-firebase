import {
	REQUEST_FETCH_POSTS,
	FAIL_TO_FETCH_POSTS,
	SUCCESS_FETCH_POSTS,
	FILTER_POSTS
} from '../actions';
export default function posts(state = {
	error: null,
	filterTitle: '',
	list: [],
	status: 'init'
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
				list: action.posts
			})
			break
		case FILTER_POSTS:
			return Object.assign({}, state, {
				status: 'success',
				filterTitle: action.filterTitle
			})
		default:
			return state
	}
}