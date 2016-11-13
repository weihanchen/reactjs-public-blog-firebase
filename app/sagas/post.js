import {
	takeEvery
} from 'redux-saga'

import {
	put,
	call
} from 'redux-saga/effects'

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
} from '../actions'

import PostApi from '../api/post/index'

export function* createPostFlow(action) {
	try {
		const post = yield call(PostApi.createPost, action.title, action.content)
		yield put({
			type: REQUEST_CREATE_SUCCESS,
			post
		})
	} catch (error) {
		yield put({
			type: REQUEST_FAILED,
			error
		})
	}
}

export function* deletePostFlow(action) {
	try {
		yield call(PostApi.deletePost, action.id)
		yield put({
			type: REQUEST_DELETE_SUCCESS
		})
	} catch (error) {
		yield put({
			type: REQUEST_FAILED,
			error
		})
	}
}

export function* fetchPostFlow(action) {
	try {
		const post = yield call(PostApi.getPost, action.id)
		yield put({
			type: REQUEST_FETCH_SUCCESS,
			post
		})
	} catch (error) {
		yield put({
			type: REQUEST_FAILED,
			error
		})
	}
}

export function* updatePostFlow(action) {
	try {
		const post = yield call(PostApi.updatePost, action.id, action.title, action.content)
		yield put({
			type: REQUEST_UPDATE_SUCCESS,
			post
		})
	} catch (error) {
		yield put({
			type: REQUEST_FAILED,
			error
		})
	}
}

export function* watchRequestCreatePost() {
	yield call(takeEvery, REQUEST_CREATE_POST, createPostFlow)
}

export function* watchRequestDeletePost() {
	yield call(takeEvery, REQUEST_DELETE_POST, deletePostFlow)
}

export function* watchRequestFetchPost() {
	yield call(takeEvery, REQUEST_FETCH_POST, fetchPostFlow)
}

export function* watchRequestUpdatePost() {
	yield call(takeEvery, REQUEST_UPDATE_POST, updatePostFlow)
}