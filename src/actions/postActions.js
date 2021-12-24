import * as postConstants from '../constants/postConstants'
import axios from 'axios'

export const listPosts = () => async (dispatch) => {
	try {
		dispatch({ type: postConstants.POST_LIST_REQUEST })

		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		)

		dispatch({ type: postConstants.POST_LIST_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: postConstants.POST_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
