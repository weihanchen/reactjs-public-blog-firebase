import {
	REQUEST_CREATE_POST,
	REQUEST_CREATE_SUCCESS,
	REQUEST_DELETE_POST,
	REQUEST_DELETE_SUCCESS,
	REQUEST_FAILED,
	REQUEST_FETCH_POST,
	REQUEST_FETCH_SUCCESS,
	REQUEST_UPDATE_POST,
	REQUEST_UPDATE_SUCCESS
} from '../actions';
export default function post(state = {
	error: null,
	content: null,
	postDate: null,
	status: 'init',
	title: null
}, action) {
	switch (action.type) {
		case REQUEST_CREATE_POST:
			return Object.assign({}, state, {
				status: 'loading',
				error: null
			})
			break
		case REQUEST_CREATE_SUCCESS:
			return Object.assign({}, state, {
				status: 'create_success'
			})
			break
		case REQUEST_DELETE_POST:
			return Object.assign({}, state, {
				status: 'loading',
				error: null
			})
			break
		case REQUEST_DELETE_SUCCESS:
			return Object.assign({}, state, {
				status: 'delete_success'
			})
		case REQUEST_FAILED:
			return Object.assign({}, state, {
				status: 'error',
				error: action.error
			})
			break
		case REQUEST_FETCH_POST:
			return Object.assign({}, state, {
				status: 'loading',
				error: null
			})
			break
		case REQUEST_FETCH_SUCCESS:
			return Object.assign({}, state, {
				status: 'fetch_success',
				content: action.post.content,
				postDate: action.post.postDate,
				title: action.post.title
			})
			break
		case REQUEST_UPDATE_POST:
			return Object.assign({}, state, {
				status: 'loading',
				error: null
			})
			break
		case REQUEST_UPDATE_SUCCESS:
			return Object.assign({}, state, {
				status: 'update_success'
			})
			break
		default:
			return state
	}
}