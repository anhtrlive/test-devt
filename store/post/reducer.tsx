import { postActionType } from './action'

const PostInitialState = {}

export default function reducer(state = PostInitialState, action: any) {
  switch (action.type) {
    case postActionType.GET_POST:
      return { ...state, ...{ ...action.payload } }
    default:
      return state
  }
}
