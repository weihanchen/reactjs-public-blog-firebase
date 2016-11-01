import {
	POST_LISTS
} from '../actions/PostAction';

import update from 'react-addons-update';
import {
	createReducer
} from 'redux-create-reducer';

const getInitialState = () => {
	return {
		lists: [],
		currentItems: postsList.perPage, //pagination
		currentPost: {
			user: {}
		}
	}
}

export default createReducer(getInitialState(), {
	[POST_LISTS](state, action) {
		return update(state, {
			lists: {
				$set: action.payload.getPosts
			}
		});
	}
});