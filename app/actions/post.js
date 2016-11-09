export const REQUEST_FETCH_POST = 'REQUEST_FETCH_POST'
export const SUCCESS_FETCH_POST = 'SUCCESS_FETCH_POST'
export const FAIL_TO_FETCH_POST = 'FAIL_TO_FETCH_POST'

export function failToFetchPost(errors) {
	return {
		type: FAIL_TO_FETCH_POST
	}
}

export function requestFetchPost(id) {
	console.log(id)
	return {
		type: REQUEST_FETCH_POST,
		id
	}
}

export function successFetchPost() {
	return {
		type: SUCCESS_FETCH_POST
	}
}