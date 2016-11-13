export const REQUEST_CREATE_POST = 'REQUEST_CREATE_POST'
export const REQUEST_CREATE_SUCCESS = 'REQUEST_CREATE_SUCCESS'
export const REQUEST_DELETE_POST = 'REQUEST_DELETE_POST'
export const REQUEST_DELETE_SUCCESS = 'REQUEST_DELETE_SUCCESS'
export const REQUEST_FAILED = 'REQUEST_FAILED'
export const REQUEST_FETCH_POST = 'REQUEST_FETCH_POST'
export const REQUEST_FETCH_SUCCESS = 'REQUEST_FETCH_SUCCESS'
export const REQUEST_UPDATE_POST = 'REQUEST_UPDATE_POST'
export const REQUEST_UPDATE_SUCCESS = 'REQUEST_UPDATE_SUCCESS'

export function requestCreatePost(title, content) {
	return {
		type: REQUEST_CREATE_POST,
		title,
		content
	}
}

export function requestCreateSuccess() {
	return {
		type: REQUEST_CREATE_SUCCESS
	}
}

export function requestDeletePost(id) {
	return {
		type: REQUEST_DELETE_POST,
		id
	}
}

export function requestDeleteSuccess() {
	return {
		type: REQUEST_DELETE_SUCCESS
	}
}

export function requestFailed(errors) {
	return {
		type: REQUEST_FAILED
	}
}

export function requestFetchPost(id) {
	return {
		type: REQUEST_FETCH_POST,
		id
	}
}

export function requestFetchSuccess() {
	return {
		type: REQUEST_FETCH_SUCCESS
	}
}

export function requestUpdatePost(id, title, content) {
	return {
		type: REQUEST_UPDATE_POST,
		id,
		title,
		content
	}
}

export function requestUpdateSuccess() {
	return {
		type: REQUEST_UPDATE_SUCCESS
	}
}