import { homePageActionTypes } from './action'

const PostInitialState = {}

export default function reducer(state = PostInitialState, action: any) {
  switch (action.type) {
    case homePageActionTypes.GET_ALL_POSTS:
      return { ...state, ...{ posts: action.payload } }
    default:
      return state
  }
}
