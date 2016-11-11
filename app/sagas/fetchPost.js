import {
	takeEvery
} from 'redux-saga'

import {
	put,
	call
} from 'redux-saga/effects'

import {
	REQUEST_FETCH_POST,
	FAIL_TO_FETCH_POST,
	SUCCESS_FETCH_POST
} from '../actions'

import PostApi from '../api/post/index';

export function* watchRequestFetchPost() {
	yield call(takeEvery, REQUEST_FETCH_POST, fetchPostFlow)
}

export function* fetchPostFlow(action) {
	try {
		const post = yield call(PostApi.getPost, action.id)
		yield put({
			type: SUCCESS_FETCH_POST,
			post
		})
	} catch (error) {
		yield put({
			type: FAIL_TO_FETCH_POST,
			error
		})
	}
}