//posts
export const REQUEST_FETCH_POSTS = 'REQUEST_FETCH_POSTS'
export const FAIL_TO_FETCH_POSTS = 'FAIL_TO_FETCH_POSTS'
export const SUCCESS_FETCH_POSTS = 'SUCCESS_FETCH_POSTS'

export function requestFetchPosts() {
	return {
		type: REQUEST_FETCH_POSTS
	}
}

export function failToFetchPosts(errors) {
	return {
		type: FAIL_TO_FETCH_POSTS,
		errors
	}
}

export function successFetchPosts(posts) {
	return {
		type: SUCCESS_FETCH_POSTS,
		posts
	}
}