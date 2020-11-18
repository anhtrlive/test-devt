import axios from 'axios'

export const postActionType = {
  GET_POST: 'GET_POST',
}

export const getPost = (id: number) => async (dispatch: any) => {
  const respoense = await axios.get(`${process.env.API_URL}/posts/${id}?_embed=comments`)
  const data = respoense.data
  return dispatch({
    type: postActionType.GET_POST,
    payload: data,
  })
}
