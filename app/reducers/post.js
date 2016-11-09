import {
	REQUEST_FETCH_POST,
	FAIL_TO_FETCH_POST,
	SUCCESS_FETCH_POST
} from '../actions';
export default function post(state = {
	error: null,
	data: {},
	status: 'init'
}, action) {
	switch (action.type) {
		case REQUEST_FETCH_POST:
			return Object.assign({}, state, {
				status: 'loading',
				error: null
			})
			break
		case FAIL_TO_FETCH_POST:
			return Object.assign({}, state, {
				status: 'error',
				error: action.error
			})
			break
		case SUCCESS_FETCH_POST:
			return Object.assign({}, state, {
				status: 'success',
				data: action.post
			})
			break
		default:
			return state
	}
}