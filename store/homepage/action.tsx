import axios from 'axios'

export const homePageActionTypes = {
  GET_ALL_POSTS: 'GET_ALL_POSTS',
}

export const getAllPosts = () => async (dispatch: any) => {
  const respoense = await axios.get(`${process.env.API_URL}/posts`)
  const data = respoense.data
  return dispatch({
    type: homePageActionTypes.GET_ALL_POSTS,
    payload: data,
  })
}
