import { login_a as actions } from '../_actions.register'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case actions.LOGIN_FULFILLED:
      return action.payload
    case actions.LOGIN_REJECTED:
      return action.payload
    case actions.LOGOUT:
      return {}
    default:
      return state
  }
}
