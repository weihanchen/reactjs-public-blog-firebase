import {
	takeEvery
} from 'redux-saga'

import {
	put,
	call
} from 'redux-saga/effects'

import {
	REQUEST_FETCH_POSTS,
	FAIL_TO_FETCH_POSTS,
	SUCCESS_FETCH_POSTS
} from '../actions'

import PostApi from '../api/post/index';

export function* watchRequestFetchPosts() {
	yield call(takeEvery, REQUEST_FETCH_POSTS, fetchPostsFlow)
}

export function* fetchPostsFlow(action) {
	try {
		const posts = yield call(PostApi.getPostsList)
		yield put({
			type: SUCCESS_FETCH_POSTS,
			posts
		})
	} catch (error) {
		yield put({
			type: FAIL_TO_FETCH_POSTS,
			error
		})
	}
}