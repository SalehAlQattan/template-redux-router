import * as postConstants from '../constants/postConstants'

export const postListReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case postConstants.POST_LIST_REQUEST:
			return { loading: true, posts: [] }

		case postConstants.POST_LIST_SUCCESS:
			return { loading: false, posts: action.payload }

		case postConstants.POST_LIST_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}
