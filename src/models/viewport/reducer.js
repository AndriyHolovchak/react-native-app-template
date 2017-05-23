import { viewport_a as actions } from '../_actions.register'

const initialState = {
  spinner: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_VIEWPORT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
