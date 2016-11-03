import {
	AWAIT_MARKER
} from 'redux-await';
import PostApi from '../api/post/index.js';

export const POST_LISTS = 'posts lists';

export function getPostsList() {
	return (dispatch) => {
		dispatch({
			type: POST_LISTS,
			AWAIT_MARKER,
			payload: {
				getPosts: PostApi.getPostsList()
			}
		});
	}
}